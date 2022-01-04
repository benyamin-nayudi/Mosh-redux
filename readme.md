### actions

> we should not hard code our actions like this:

```js

store.dispatch({
  type:'apiCallBegan' ,
  payload:{
      url:'/bugs' , 
    //   method: get ,  the default is to get
    //   data : {}, we don't need it for now
      onSuccess : 'bugReceived' ,
      onError : 'apiRequestFailed'
  }
})



##################################
##################################


const api = ({dispatch}) => next => async action =>{
    if(action.type !== 'apiCallBegan') return next(action)
    next(action)
    const {url , method , data , onSuccess , onError}  = action.payload

    try{
        const response = await axios.request({
            baseURL:'http://localhost:9001/api' ,
            url ,
            method,
            data
        })
        dispatch({type: onSuccess , payload: response.data})
    }catch(err){
        dispatch({type: onError , payload: error})
    }
}
```
in these codes we have used the action `'apiCallBegan'` manually, instead of this approach we can make `actionCreators`. [api.js](./src/store/api.js)

> we also can write better action creators with `redux-toolkit` `createAction` function like this:

```js
store.dispatch(actions.apiCallBegan({
  url:'/bugs' , 
  onSuccess : 'bugReceived' ,
  onError : actions.apiCallFailed.type
}))

```

the `error` that we are handling right now is a general `error` and our `middleware` can handle it . so we can specify a general error in our `middleware`. also we can make a specific error dispatcher (not that we should make sure that the `onError` object is available)




```js
const api = ({dispatch}) => next => async action =>{
    if(action.type !== actions.apiCallBegan.type) return next(action)
    next(action)
    const {url , method , data , onSuccess , onError}  = action.payload

    try{
        const response = await axios.request({
            baseURL:'http://localhost:9000/api' ,
            url ,
            method,
            data
        })
        // general success dispatch
        dispatch(actions.apiCallSuccess(response.data))

        // specific 
        if(onSuccess)  dispatch({type: onSuccess , payload: response.data})

    }catch(err){

        // a general error handler
        dispatch(actions.apiCallFailed(error))

        // specific
        if(onError) dispatch({type: onError , payload: error})
    }
}

export default api

```






