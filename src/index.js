
import configureStore from "./store/configureStore";
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


// now after using memoization library if we call this function twice (without changing the state, the two result arrays must be equal)
const x = getUnresolvedBugs(store.getState())
const y = getUnresolvedBugs(store.getState())


console.log(x === y)