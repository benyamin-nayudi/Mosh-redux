import { bugAdded } from "./store/bugs";
import configureStore from "./store/configureStore";
import * as actions from './store/api'

const store = configureStore();


// now we can use the ability of actionCreator function from redux-toolkit to create better actions

store.dispatch(actions.apiCallBegan({
  url:'/bugs' , 
  onSuccess : 'bugReceived' ,
}))
