### backend 

> with the thunk middleware we can call APIs and make side effects . 

>note that we should not define the calling API in the reducers , because the reducers must be pure and get an action and return new state so:
- no side effects
- no DOM manipulation
- no API calls
- no state mutation
 
 this properties makes our reducers easy to test

>so we can put the functionality of calling the APIs in the actionCreators. with the thunk middleware , actionCreators can return functions, and this functions are where we encapsulate our side effects. 

```js
function actionCreator(){
    return function(){

    }
}
```

also we have discussed that our thunk middleware pass the dispatch and getState methods to the actionCreator , so we can dispatch new actions and look at the current state of the store.

we may not need the getState so we can simplify our function:

```js
const actionCreator = () => (dispatch) =>{

}
```

now if we need to get the list of our bugs from the server:
1. call api => fetch , axios , superAgent
2. resolved promise: dispatch(success) => put the data inside the payload and pass it to the reducer to store it.
3. rejected: dispatch(error)

naming conventions: 
- PRESENT:
    - GET_BUGS_REQUEST
    - GET_BUGS_SUCCESS
    - GET_BUGS_FAIL

--

- PAST:
    - bugsRequested
    - bugsReceived
    - bugsRequestFailed

as we go on , this functionality keep to be repeated , so we can use a middleware to implement it.

1. create a middleware in [api.js](./src/store/middleware/api.js) file 

```js
const api = store => next => action =>{

}

export default api
```

we can specify an action with a type and payload like this:
```js
const action ={
    type: 'apiCallBegan' ,
    payload: {
        url: '/bugs',
        method: 'get' , 
        data: {} ,
        onSuccess: 'bugsReceived' , 
        onError: 'apiRequestFailed'
    }
}
```
`onSuccess` and `onError` are the functions that we should dispatch if the `api call` **fails** or **successes**

> here we are not passing functions as callbacks instead of bugsReceived string, that is because the action object should be stored and we can't store it if it contains functions

so here we check the type of the action

```js
const api = store => next => action =>{
    if(action.type !== 'apiCallBegan'){
        next(action);
        return // we don't want the rest of the function to be executed.
    }
}

export default api
```
we can simplify it :
```js
const api = store => next => action =>{
    if(action.type !== 'apiCallBegan')return next(action);
}

export default api
```


now we can implement the functionality of calling an api endpoint. so we should follow :
1. make the api call
2. handle the resolved and reject cases.

>we can use axios.

```js
const api = store => next => async action =>{
    if(action.type !== 'apiCallBegan') return next(action)

    const {url , method , data , onSuccess , onError}  = action.payload
    try{
        const response = await axios.request({
            baseURL:'http://localhost:9001/api' ,
            url ,
            method,
            data
        })
    }catch(error){

    }
}

export default api
```
>the `url` is the `endpoint` so we should use a `baseURL` to complete it(we should put it in a `configuration file` in a real website) 

then after getting the data we want to dispatch our actions.

```js
const api = ({dispatch}) => next =>async action =>{
    if(action.type !== 'apiCallBegan') return next(action)

    const {url , method , data , onSuccess , onError}  = action.payload
    try{
        const response = await axios.request({
            baseURL:'http://localhost:9001/api' ,
            url ,
            method,
            data
        })
        dispatch({type: 'onSuccess' , payload: response.data})
    }catch(error){
        dispatch({type: 'onError' , payload: error})
    }
}

export default api
```
so we invoke our action in [index.js](./src/index.js)

note that the `apiCallBegan` action didn't appear in the devtools:
> because we swallow it by another `dispatch` (used it to `dispatch` another action=> `api call`) . to make it appear in the devTools we must pass it to the `next() `function.


```js
const api = ({dispatch}) => next =>async action =>{
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
        dispatch({type: 'onSuccess' , payload: response.data})
    }catch(error){
        dispatch({type: 'onError' , payload: error})
    }
}

export default api
```


