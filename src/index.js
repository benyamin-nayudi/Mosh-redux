
import configureStore from "./store/configureStore";
import * as actions from './store/bugs'
import { projectAdded } from './store/project'

const store = configureStore();


store.subscribe(()=>{
    console.log('state changed!')
})


store.dispatch(projectAdded({name :'project 1'}))
store.dispatch(projectAdded({name :'project 2'}))

store.dispatch(actions.bugAdded({description: 'Bug 1'}))

store.dispatch(actions.bugAdded({description: 'Bug 2'}))

store.dispatch(actions.bugAdded({description: 'Bug 3'}))

store.dispatch(actions.bugResolved({id : 3}))
