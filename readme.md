### dispatching functions
> actions should be a plane objects with `type` property so if we pass an empty object to the dispatch function we will get an error . 
- **`Actions may not have an undefined "type" property.`**

> and if we dispatch a function we also will get an error 
- **`Actions must be plain objects. Use custom middleware for async actions.`**

- reasons why we want to pass a function to the dispatch:
1. for calling an API
2. when the promise is resolved ( a result of calling API) and dispatch an action using the result 
3. if the promises rejected => `dispatch()` an action for that error

> so we can give the store , the ability of firing functions by using middleware

### so in the middleware store we make a new middleware file [func](./src/store/middleware/func.js)
- we can now check the `typeof` the passed `action`. if it was a `function` we can invoke it or if it was a plane object we can pass it to the next `middleware` or `reducer`

```js
const func = store => next => action =>{
    if (typeof action ==='function')
        action();
    else next(action)
}
```

and we can add it to the [configureStore](./src/store/configureStore.js) function:

```js
    export default function(){
        return configureStore({
            reducer , 
            middleware:[
                logger({destination: 'console'}),
                func
            ]
        })
    }
```
>**`note that the order in this structure matters so every action goes to its middleware in order`**

now we can `dispatch` functions. here lets imaging that we called an API and after the resolve we want to `dispatch` an object that contains the resolved data. 

```js
store.dispatch(()=>{
    // call an api
    // when the promise is resolved => dispatch
    store.dispatch({type: 'bugReceived' , bugs: [1,2,3]})
    // when the promise is rejected => dispatch
})

```

so we will get two logs : the `first one is when we dispatched a function` and the second one is the `actions that contains the resolved API`. and if you go to the `redux devTools` you can see the `action` in the actions tab 
>this is just an `action` that has been dispatched , it doesn't affect any `reducer` because they doesn't care about it ( it is not from their `action types`)
---
### a problem here is that we don't have access to the store object in other places so we cant perform 

```js
    const store = configureStore()
    store.dispatch({type: 'bugReceived' , bugs:[1,2,3]})
```

if we import this `configureStore` function from its `module` and call it again we will get a different `store` object. to solve this problem we can `destructure` the store parameters ( dispatch , getState) in the middleware function. and pass them as arguments to the action function

```css
const func = ({getState , dispatch}) => next => action =>{
    if (typeof action ==='function')
        action(dispatch , getState);
    else next(action)
}
```

so our function here gets two parameters :

```js
store.dispatch((dispatch , getState  )=>{
    // call an api
    // when the promise is resolved => dispatch
   dispatch({type: 'bugReceived' , bugs: [1,2,3]})
    // when the promise is rejected => dispatch
})
```
and now we can simply just `dispatch` our object. 

the `getState` is somehow for decision making , we can get the data and if our data was in there we can skip the API call.

```js
store.dispatch((dispatch , getState  )=>{
    // call an api
    // when the promise is resolved => dispatch
   dispatch({type: 'bugReceived' , bugs: [1,2,3]})
   console.log(getState())
    // when the promise is rejected => dispatch
})
```
---
this is the `flow` or our dispatchers .
1. first we `dispatch` a function :
```js
store.dispatch(()=>{
   store.dispatch( { type: 'bugReceived' , bugs: [1,2,3] } )
})
```
this function dispatches an `action` with a given `object` . this `action` just have `type` and `data` and **`doesn't`** affect anything.

2. then the `dispatch` function takes that `function(the anonymous function we have passed to it)` and pass it to our `middleware` before reaching the `reducers`.

3. the first `middleware` that handle our `action` is the `logger` middleware. it simply `console.log` something and give the action to the `next()` middleware.

4. the second `middleware` takes an `action` and checks the `type` of it. 
    - if it was a plane `object` it gives it to the `next()` method and the next thing is the `reducer` while we don't have any other `middleware` remained.
    - if the type of our action was `function`. we give that `function`, the two methods that we have got from the `store` Object (that object looks like the `store`) (`dispatch` and `getState`) . so we can receive those methods in the first place while dispatching our `action` . then the `action` will be invoked and do whatever it told to.
---

that was the flow of our `middleware`. this `middleware` give us the ability to make `async` calls . but we don't need to do everything from scratch. and that's why we use **`thunk`**.
>if you use `redux-toolkit` you automatically can access this middleware, but if you don't use it you must `npm i redux-thunk` and register it as a `middleware` function.

let's implement the thunk middleware :
> first we should get rid of `func` middleware since we want to use `thunk`.

by this implementation in the [configureStore](./src/store/configureStore.js) 

```js
return configureStore({ 
        reducer , 
        middleware:[logger({destination: 'console'}) , func] 
    }) 
```
we actually are **`overwriting`** the default `middleware` that `redux-toolkit` has brought for us. so we can get `getDefaultMiddleware` , this method return us an array of `middleware` functions from `redux-toolkit`:

```css
export default function configureAppStore(){
   return configureStore({ 
        reducer , 
        middleware: (getDefaultMiddleware) => [
            ...getDefaultMiddleware() , 
            logger({destination: 'console'}) 
        ] 
    })    
}
```













