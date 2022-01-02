
import configureStore from "./store/configureStore";
import * as actions from './store/bugs'

const store = configureStore();


store.subscribe(()=>{
    console.log('state changed!')
})

// by using redux-toolkit the argument that we pass to the bugAdded is the payload so we want our payload
store.dispatch(actions.bugAdded('bug1'))
store.dispatch(actions.bugAdded('bug2'))
store.dispatch(actions.bugAdded('bug3'))
store.dispatch(actions.bugResolved(3))

console.log(store.getState())