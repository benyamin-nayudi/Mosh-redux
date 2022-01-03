//# import { combineReducers } from "redux";
//# import bugReducer from './bugs'
//# import projectReducer from './project'

//# export default combineReducers({
//#     bugs: bugReducer ,
//#     projects : projectReducer
//# })
// we leave these to the entities file and make this file the rootReducer



import { combineReducers } from "redux";
import entitiesReducer from "./entities";

export default combineReducers({
    entities: entitiesReducer
})
