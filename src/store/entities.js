 import { combineReducers } from "redux";
 import bugReducer from './bugs'
 import projectReducer from './project'

 export default combineReducers({
     bugs: bugReducer ,
     projects : projectReducer
 })