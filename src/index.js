
import configureStore from "./store/configureStore";
import { bugAdded , bugResolved , bugAssignToUser , getBugsByUser } from './store/bugs'
import { projectAdded } from './store/project'
import { userAdded } from "./store/users";

const store = configureStore();


store.subscribe(()=>{
    console.log('state changed!')
})

store.dispatch(userAdded({name :'user 1'}))
// store.dispatch(userAdded({name :'user 2'}))


// store.dispatch(projectAdded({name :'project 1'}))
// store.dispatch(projectAdded({name :'project 2'}))

// store.dispatch(bugAdded({description: 'Bug 1'}))

// store.dispatch(bugAdded({description: 'Bug 2'}))

// store.dispatch(bugAdded({description: 'Bug 3'}))

// store.dispatch(bugResolved({id : 3}))

// store.dispatch(bugAssignToUser({ bugId : 1 , userId : 1}))



const bugs = getBugsByUser(1)(store.getState())
console.log(bugs)