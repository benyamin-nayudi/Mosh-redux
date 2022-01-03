
import configureStore from "./store/configureStore";

// we can name import the actions and make our code more readable
//# import * as actions from './store/bugs'
import { bugAdded , bugResolved ,getUnresolvedBugs } from './store/bugs'

import { projectAdded } from './store/project'


const store = configureStore();


store.subscribe(()=>{
    console.log('state changed!')
})


store.dispatch(projectAdded({name :'project 1'}))
store.dispatch(projectAdded({name :'project 2'}))

store.dispatch(bugAdded({description: 'Bug 1'}))

store.dispatch(bugAdded({description: 'Bug 2'}))

store.dispatch(bugAdded({description: 'Bug 3'}))

store.dispatch(bugResolved({id : 3}))


// instead of hardCoding it here we can put it in its slice
//# const unresolvedBugs = store.getState().entities.bugs.filter(bug => !bug.resolved)
//# console.log(unresolvedBugs)


//* we can import the selector function and use it instead of the top approach
const unresolvedBugs = getUnresolvedBugs(store.getState())
console.log(unresolvedBugs)