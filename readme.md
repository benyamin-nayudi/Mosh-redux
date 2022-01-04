### restructuring our store
in the [bugs.js](./src/store/bugs.js) we can change the `initialState` to something like this:

```js
initialState : {
        list: [] , 
        loading: false,
        lastFetch: null
    } , 

```
- `loading:` when we are fetching our data we can set this to true and use it to display a `loading` message.

- `list:` contains the list of bugs.

- `lastFetch:` time stamp of the last time we called the `server`. it is useful for `caching` . for example if you have fetched the list of bugs 10 minutes ago, maybe you don't need to fetch them again and we can use what we have in the `store`.

> by this approach you are setting the bugs `state` to an object so you must change the `reducer` because the `bugs` is no longer an `array` so you should use `bugs.list` to indicate to the `state array`


> **`this is just an approach that might be useful but don't use it blindly anywhere.`**

---


### get the bugs from the server

so currently we don't have any reducer to handle this action. (`bugsReceived`)
```js
store.dispatch(actions.apiCallBegan({
  url:'/bugs' , 
  onSuccess : 'bugsReceived' ,
}))

```

so we should make a reducer to handle it [bugs.js](./src/store/bugs.js)

and then while the actions in the `bugs slice` prefixed with the name `bugs` we should change our action name in the [index.js](./src/index.js)

```js
store.dispatch(actions.apiCallBegan({
  url:'/bugs' , 
  onSuccess : 'bugs/bugsReceived' ,
}))
```
---
 the problem with this is that you `ui` layer doesn't need to know about these details `(url , onSuccess)` or any other thing so let make our `actions` more automate. 

- first we should make a new function in [bugs.js](./src/store/bugs.js) name `loadBugs`. this function just call the `apiCallBegan` action so we should import it .
```js
const url = '/bugs'

export const loadBugs = () => apiCallBegan({
    url , 
    onSuccess : bugsReceived.type ,
  })
```
now we can pass the `object` that we have passed to the `dispatch` function in [index.js](./src/index.js). 
> in real website you may use the `url` some other places so it is better to put it inside a `variable`.

then we can get the `bugsReceived` from the `reducers` that we have destructured and assign its type to the `onSuccess` property.

now we can `dispatch` a new simplified `action` in the [index.js](./src/index.js). 

```js
import { loadBugs } from "./store/bugs";

store.dispatch(loadBugs())

```







