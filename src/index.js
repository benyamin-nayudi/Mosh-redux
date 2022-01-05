import { bugAdded } from "./store/bugs";
import configureStore from "./store/configureStore";
import { loadBugs , resolveBug , assignBugToUser } from "./store/bugs";
import { addBug } from "./store/bugs";


const store = configureStore();



store.dispatch(loadBugs())

setTimeout(()=>{
  store.dispatch(assignBugToUser(1 , 4))
} , 2000)

