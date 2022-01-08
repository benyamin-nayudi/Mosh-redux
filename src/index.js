
import store from "./customStore";
import * as actions from './actions'

// our store object has a dispatch method, the dispatch method gets an action , and gives it to the reducer function (that we have passed to the store) , then the reducer gets the state and the action and returns a new state and store it inside the state again. then we get the State by getState() method . easy peasy :) 
store.dispatch(actions.bugAdded('bug1'))

console.log(store.getState())