### caching

> if we `dispatch` the action in the `index.js` two times (the second one after 2seconds) , it will return us another `api call`. but we don't want that . so lets implement a functionality that when a certain amount of time has passed , then we can call the `api` , otherwise it uses the data in the `store`.

- we can assign the `Date.now()` timeStamp to the property lastFetch in the bugReceived reducer.

- we want to get the value of lastFetch in loadBugs function .

this function returns a function that returns a plain object:
```js 
export const loadBugs = () => apiCallBegan({
    url , 
    onStart: bugsRequested.type,
    onSuccess : bugsReceived.type ,
    onError: bugsRequestFailed.type
})
```
and we don't have access to the current state. if we want to have the current state , we should return a function , and with thunk middleware we can dispatch functions , and this functions optionally receive two arguments ( dispatch and getState) so :
```js
export const loadBugs = () =>(dispatch , getState)=>{
    const { lastFetch } = getState().entities.bugs
}
```
and the last thing we should do is that explicitly dispatch the action so :
```js
export const loadBugs = () => (dispatch , getState) =>{
    const {lastFetch} = getState().entities.bugs
    dispatch(apiCallBegan({
        url , 
        onStart: bugsRequested.type,
        onSuccess : bugsReceived.type ,
        onError: bugsRequestFailed.type
    })) 

}
```
### now we should compare the current time with the timeStamp , we can use `moment.js` library
so this is how we use this library to 
- get the `difference` in minutes and `return` if it was less than `10`

```js
    const diffInMinutes = moment().diff(moment(lastFetch) , 'minutes')
    if(diffInMinutes < 10) return ;
```

notes:
- it is better to store this numbers (10 ...) in a configuration file so you can change them later on
- we can have this functionality separated to use them in another slices




