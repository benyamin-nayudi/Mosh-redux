// a very important note here that we can't change the store directly , so if we want to change its states we should use the dispatch function

import store from "./customStore";

// now if we console the getState method we get Undefined because we haven't initialized our variable 
// console.log(store.getState())

// now if we set 
store.state = 1 
// it will log state: 1 , but this is another state and it is not our state variable in the store and we dynamically added it to the store object
console.log(store)
// so this is how we implement private properties in javascript


