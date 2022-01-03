 import { combineReducers } from "redux";
 import bugReducer from './bugs'
 import projectReducer from './project'
import usersReducer from "./users";


 export default combineReducers({
     bugs: bugReducer ,
     projects : projectReducer,
     users:  usersReducer
 })