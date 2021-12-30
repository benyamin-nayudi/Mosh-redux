// here we are making a store . our store function returns and object with a property => state , that we have declared above it. if we import it in index.js we can modify it from outside of the function (and this is bad )
function createStore (){
    let state;

    // functions are first class citizens , so we can declare another function inside a function 
    function getState(){
        return state; // we call this function a getter , because it gets the value of the properties without letting us to change its value
    }
    return {
        // in OOP terms we say that our store has a method name: getState
        getState 
    }
}

export default createStore();


