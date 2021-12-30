// to access the reducer we should import it and we pass it to the createStore function at the end (when we export it)
import reducer from './reducer'


// to change the state we should implement the dispatch function . the dispatch accepts a reducer function that we pass to the store as argument. 

function createStore (reducer){
    let state;

    function dispatch(action){
        // then here we call the reducer and pass it the previous state and the action and store it inside the state again. 
        state = reducer(state, action)
    }

    function getState(){
        return state
    }
    return {
        dispatch ,
        getState 
    }
}

export default createStore(reducer);


