### implementing the ability to assign bugs to users
1. we should create a new slice for adding users in [users.js](./src/store/users.js)

2. then we should add a reducer to [bugs.js](./src/store/bugs.js) so that it can assign a bug to user

3. then create selector (`getBugsByUser`) to return a user bugs. so we define a function with createSelector like this: 
```css
export const  getBugsByUser =  createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => bug.userId === ??? )
)
```

> but here we must get the userId ,so instead of assigning it to `getBugsByUser` constant , we can assign it to a different function (`userId`) , this function accepts an argument (`userId`) and  return a value that returned from the `createSelector` function. in other words:
```css
export const  getBugsByUser = userId =>  createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => bug.userId === userId )
)
```

now if we :  
```css 
const selector = getBugsByUser(1)
```
this will return a function that accepts a state so we can give it :
```css 
selector(state)
```

now we can invoke it in [index.js](./src/index.js) like this:
```css
const bugs = getBugsByUser(1)(store.getState())
```


we can rewrite it like this 
```css
export function getBugsByUser(userId){
    return createSelector(
        state => state.entities.bugs,
        bugs => bugs.filter(bug => bug.userId === userId)
    )
}
```