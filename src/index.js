
import store from "./store";
import * as actions from './actions'


store.subscribe(()=>{
    console.log('state changed!')
})

// store.dispatch(actions.bugAdded('bug1'))
// store.dispatch(actions.bugAdded('bug2'))
// store.dispatch(actions.bugAdded('bug3'))
// store.dispatch(actions.bugResolved(3))

console.log(store.getState())