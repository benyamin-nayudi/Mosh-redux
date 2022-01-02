
import configureStore from "./store/configureStore";
import * as actions from './store/bugs'

const store = configureStore();


store.subscribe(()=>{
    console.log('state changed!')
})



//* by using redux-toolkit the argument that we pass to the bugAdded is the payload so we want our payload to be an object with the description prop. 

//* pay attention that our reducer extract the description from the payload object so we must here add an object as a payload

//# store.dispatch(actions.bugAdded('bug1'))
store.dispatch(actions.bugAdded({description: 'Bug 1'}))

store.dispatch(actions.bugAdded({description: 'Bug 2'}))

store.dispatch(actions.bugAdded({description: 'Bug 3'}))

store.dispatch(actions.bugResolved({id : 3}))

// console.log(store.getState())