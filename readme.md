### resolving bugs

now we have two actions : `addBug` and `bugAdded`.
the `addBug` is like a command and `bugAdded` is like an event. so we can make this for the resolving a bug

`resolveBug`(command) - `bugResolved`(event)

```js
export const resolveBug = id => apiCallBegan({
    url : url +'/'+id,
    method: 'patch' , 
    data : {resolved: true} , 
    onSuccess: bugResolved.type
})
```


so in `index.js` we want to first load a bug then resolve it after 2s .

```js
store.dispatch(loadBugs())

setTimeout(()=>{
  store.dispatch(resolveBug(4))
} , 2000)
```