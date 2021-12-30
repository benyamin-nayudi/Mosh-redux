import reducer from './reducer'



function createStore (reducer){
    let state;

    let listeners = []
    // to create the subscribe method we can make a function that accept a listener, then it will store the listener inside an array (so we can have multiple listeners for various components) then when dispatching the actions we fire the functions inside the listeners as we wrote below
    function subscribe(listener){
        return listeners.push(listener)
    }
    

    // in the real store in redux there is multiple type checking but we don't have any here , one of them checks if the action have type property in it or not
    function dispatch(action){
        state = reducer(state, action)
        console.log(listeners)
        
        for(let i = 0 ; i < listeners.length ;i++){
            return listeners[i]()
        }
    }

    function getState(){
        return state
    }


    return {
        subscribe , 
        dispatch ,
        getState 
    }
}

export default createStore(reducer);


