### saving data on the server

1. we have to make an API call
2. promise resolved => dispatch(success)
2. promise rejected => dispatch(error)


we should make another function to handle this :
```js
export const addBug = bug => apiCallBegan({
    url, 
    method: "post" , 
    data : bug ,
    onSuccess: bugAdded.type
})
```

then we should change our reducer to add the payload that the server gives us.

```css
bugAdded : (bugs , action ) =>{ 
    bugs.list.push(action.payload)
} , 
```
