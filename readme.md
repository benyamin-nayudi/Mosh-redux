### with createSlice function we can make the reducers and actions even more easily

1. first we should import { createSlice } from redux-toolkit

2. we invoke it and pass it the configuration object. this object has some props
- name: is the name of the slice (in this case bugs)
- initialState : the initial state of our reducer (in this case [ ] )
- reducers : the reducers key accepts an object and each key represent an action and the value represent the action handler (the functionality for that action)
> by writing the reducers like this we no longer need to use computed syntax while writing the reducers key ( `[ bugAdded.type ]` ) , because that key is the only place that we change if we want to .

> in fact the `createSlice` function automatically create `actionTypes` and `reducers` from those key-value pairs. (it calls two function => the `createAction` and `createReducer`)

3. at the end we must export default the `slice.reducer` and export the `actions` (we can use destructuring )