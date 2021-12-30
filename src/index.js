// a very important note here that we can't change the store directly , so if we want to change its states we should use the dispatch function

import store from "./customStore";

// here we can modify the store state 

store.state = 1
console.log(store.state)

