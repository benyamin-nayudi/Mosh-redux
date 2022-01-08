// here we are making a custom store . our store function returns and object with a property => state , that we have declared above it. if we import it in index.js we can modify it from outside of the function (and this is bad )
function createStore (){
    let state;

    return {
        state
    }
}

export default createStore();