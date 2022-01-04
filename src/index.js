import { bugAdded } from "./store/bugs";
import configureStore from "./store/configureStore";
import { loadBugs } from "./store/bugs";

const store = configureStore();



store.dispatch(loadBugs())


// store.dispatch(actions.apiCallBegan())
