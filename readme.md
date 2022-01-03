### middleware
- a middleware is a function that can be place in the middle of dispatching an action and the root reducer. so before the action reaches the root reducer we can make some functionality on it

> we have tons of middleware for :
1. calling APIs
2. authentication
3. analytics 
4. error reporting

---
creating middleware
1. create a folder name `middleware` and inside of it create a file name `logger`. this middleware simply logs out any actions we dispatch to the console.

2. to create `middleware` we just create a function that accepts three parameters .
```css
const logger = (store , next , action) =>{
    
}
```
> the `next` parameter here means to go to the next `middleware`. but since we don't have any other `middleware`, here is just execute the `reducer`.

we can `curry` this function so it accepts one parameters at a time

```js
const logger = store => next => action =>{
    console.log('store' , store)
    console.log('next' , next)
    console.log('action' , action)
}
```

3. then we can add this function to the [configureStore](./src/store/configureStore.js) by adding a middleware array 

> the `store` object that is logged from this function does have a store object but it is not the `store`, it is an `object` that looks like the `store`, because the `store` has a few more methods but for simplicity we can refer it as `store`.


even though we have dispatched an action `userAdded` but no user has been stored in the `state`. that is because we didn't call the `next` function .

```js
const logger = store => next => action =>{
    console.log('store' , store)
    console.log('next' , next)
    console.log('action' , action)
    next(action)
}
```
>`next` here call the `reducer` (add user to the state) so we should pass it the `action`

---
so a `middleware` function is the `curry` version of a function with three parameters . you can memorize is by `SNA`:
- S: store
- N: next
- A: action

also we can destructure the store object to get getState and the dispatch methods from that object that look like the store.
```js
const logger = ({getState , dispatch}) => next => action =>{
    console.log('store' , store)
    console.log('next' , next)
    console.log('action' , action)
    next(action)
}
```

--- 
if we don't use `redux-toolkit` we simply import the `applyMiddleware` from `redux` and :

```js
import {createStore , applyMiddleware } from 'redux'
import reducer from './store/reducer'

const store  = createStore(reducer , applyMiddleware(logger , `otherMiddleWare`))

```
this `applyMiddleware` is what we call a **`store enhancer`** ( it is a function that allows us to enhance our store)