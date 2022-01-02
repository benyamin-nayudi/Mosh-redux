### redux toolkit
> providing some utility functions to simplify our redux code

1. function to configure the store.
- no need to pass `devtoolEnhancer` 
- using async api calls (if you don't use the toolkit  function you need to apply middleware in your store )
> the important note here is that if we don't use redux toolkit we should all these configuration manually but by using it , we can get all of them for free. 

**lets implement it in the configureStore file**


---

## we also can make better and easier actionsCreators
> bugs.js file
## 1. first we must import the `{ createAction }` from redux-toolkit
## 2. this function can be used to make  us **actionCreators** like this : 
 >   `const bugAdded = createAction('bugUpdated')`
 - this actionCreator is gonna have type and payload prop. the `'bugUpdated'` that we passed it its type and if we invoke it , the argument that we pass to it becomes its payload
 > `bugAdded( { id : 1 } )`
 - note that you should give it an object because later on you will get the payload as an object


## 3. you can get rig of actionTypes constants 


---
---

## making reducers with redux-toolkit
> with redux toolkit we can get rid of writing reducers like that .
 1. first import` { createReducer }` from redux-toolkit
 2. the createReducer accepts two arguments , the first one is the initial data and the second one is an object containing our functionality.
> the object we pass have key-value pairs . each key represent our action and the value is the function to that action. under the hood the redux toolkit uses immer so we can use immutable codes easily we have two actions `bugAdded` and `bugResolved`. 

 3. we can simply push our changes to the state and toolkit will convert it to immutable code .
 4. to better reading we can change the `state` to represent our feature ( in here `bugs`) and the result will be the same with a better readability.

 5. if later on we want to change the `bugAdded` to something else like `createBug` we must change every reducer that uses it . to avid this repeating we can use `[bugAdded.type]` in the key of our reducer object so it automatically gets the type of the action (because the `createAction` makes us an object and we can access each prop )

 6. no need to default statements while using redux-toolkit









