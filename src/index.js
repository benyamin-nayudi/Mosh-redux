import { bugAdded } from "./store/bugs";
import configureStore from "./store/configureStore";

const store = configureStore();
// store.dispatch(() =>{})
// let dispatch a function :

store.dispatch((dispatch , getState )=>{
    // call an api
    // when the promise is resolved => dispatch
   dispatch({type: 'bugReceived' , bugs: [1,2,3]})
   console.log(getState())
    // when the promise is rejected => dispatch
})

store.dispatch(bugAdded({description: 'bug 1'}))
