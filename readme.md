### loading indicator

1. first we should make a reducer to handle this : bugRequested 
>this is a portion of the reducers.

```js
bugsReceived: (bugs , action) =>{
    bugs.list = action.payload
    bugs.loading= false
},
bugsRequested : (bugs , action) =>{
    bugs.loading = true
}
```
> so first we make the `loading` message to `true` while loading the `data` and when we received the `data` we make it `false`.

2. set this reducer to our loadBugs function (since it is the responsible of calling the api). 

```js
export const loadBugs = () => apiCallBegan({
    url , 
    onStart: bugsRequested.type,
    onSuccess : bugsReceived.type ,
})
```

3. we make our [api.js](./src/store/middleware/api.js) `middleware` dispatch the `loading` action. but make sure only `dispatch` this action when `onStart` is defined.
```js
if(onStart) dispatch({ type: onStart })
```
> we can change the order of our actions 
1. first we have a request
2. the beginning of the api call
3. api success / fail
4. receiving the data

>if our request `fails` there is no `reducer` to handle the `loading` and set it to `false` so we can make another `reducer` to handle it .

>we get an error of `non-serializable` action while dispatching the `api/callFailed`. we simply add `.message` to the error in the `middleware`