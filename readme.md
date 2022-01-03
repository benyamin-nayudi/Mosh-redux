### storing local state in redux & storing all states in redux

### there is two approaches that we can store states in redux

1. store just the global states in the redux store (those states that some components use them ) and leave the rest as local states. 
     
    - for example if you have a shopping website you can store the `cart` and `user` object in the store and leave the other states as local states.
> but don't forget that you are using the redux for small amount of your project and in this case it is better to use `useContext` hook in react. 

> **so if you use redux just to share data it is better to use context because it is easy to implement.**
 
 ---
2. store everything in the redux store.
- `unified data access:` our code will be more consistent and more maintainable.
- `cacheability`: so when our data is already in the store we can access it without need to refetch it from the server
- easier debugging with redux devtools
- more testable code

> **but you need to write more redux code**

### exception:
> we normally don't want to store the form states in our redux store. because they are:
1. temporary values
2. too many dispatches
3. harder debugging

so we don't want to update the store while the user `update the data` (filling the form) but we want to update the store when the user `submit` the data

>**`so remember to not use redux for handling form states`**


> the more state we put in the store the more we can get our of redux but it doesn't mean that we should put everything in the store. the local state is fine and we  should use it when it makes sense:
1. dealing with data that other part of the application doesn't care about it is better to store this data locally in the component

