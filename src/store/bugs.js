import { createAction } from '@reduxjs/toolkit'



//* we can make actionCreators using createAction function from redux-toolkits
//*  we just simply give the createAction an argument and that will become the type of the action . and then store it in a variable and when invoking it if we pass any data to it as an argument it will make it as the action payload.
//* in fact we have converted those big actionCreators into a single line

//& const bugUpdated = createAction('bugUpdated')
//& console.log('action' , bugUpdated(1))
//& console.log('action2' , bugUpdated({id: 2}))


//# export const bugAdded = description =>({
//#     type: BUG_ADDED , 
//#     payload:{
//#         description
//#     }
//# })



//* the bugUpdated is an object and we can access its properties (type and payload)
//&console.log(bugUpdated.type)




// actionTypes
//$ we can get rid of these .
//  const BUG_ADDED = 'bugAdded'
//  const BUG_REMOVED = 'bugRemoved'
//  const BUG_RESOLVED = 'bugResolved'




// $ lets refactor our actionCreators now with redux-toolkit
// action creators
export const bugAdded = createAction('bugAdded')
export const bugResolved =createAction('bugResolved')
export const bugRemoved =createAction('bugRemoved')

console.log(bugAdded())



// reducers 
let lastId = 0 

 const reducer = (state =[] , action) =>{
    switch(action.type){
        case bugAdded.type:    //we can pass the type prop from bugAdded obj
        return [
            ...state , 
            {
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            }
        ] 
        case bugRemoved.type:   
            return state.filter(bug => bug.id !== action.payload.id)
        case bugResolved.type :
            return state.map( bug => bug.id === action.payload.id
                                    ? {...bug , resolved:true} : bug)

        default: 
            return state;
    }
}
export default reducer