
import store from "./customStore";
import * as actions from './actions'


store.subscribe(()=>{
    console.log('state changed!')
})

store.dispatch(actions.bugAdded('bug1'))
store.dispatch(actions.bugAdded('bug2'))

console.log(store.getState())