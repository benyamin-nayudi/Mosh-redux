import { createAction , createReducer } from '@reduxjs/toolkit'



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




// $========actionTypes

//$ we can get rid of these .
//  const BUG_ADDED = 'bugAdded'
//  const BUG_REMOVED = 'bugRemoved'
//  const BUG_RESOLVED = 'bugResolved'




// $ lets refactor our actionCreators now with redux-toolkit
// action creators
export const bugAdded = createAction('bugAdded')
export const bugResolved =createAction('bugResolved')
export const bugRemoved =createAction('bugRemoved')







//$========== reducers 

// * lets change the reducers with redux toolkit. under the hood redux-toolkit uses immer so we can write immutable code. for that we import createReducer from redux-toolkit


/// the createReducer function accepts an initial state and an object with key value pairs , the keys are the actions and the values are functions that handle those actions. 
//*  in fact the function we write in front of the bugAdded key , is automatically passed to 'immer' as the second argument and making our life easier by writing immutable code without any difficulty
// $we can use bugs instead of state argument and this make our code more readable. and we can use [bugAdded.type] instead of hardcoding it (so when we change it later it changes here automatically)

let lastId = 0 

export default createReducer([] , {
    
    //# bugAdded : (state , action) => { changing the state to bugs
    //# bugAdded : (bugs , action) => { 
    [bugAdded.type] : (bugs , action) => {
        console.log(bugs.map(bug => console.log(bug)))
       bugs.push({
            id: ++lastId,
            description: action.payload.description,
            resolved: false
        })
    },
    [bugResolved.type] : (bugs , action) =>{
        const index = bugs.findIndex(bug => bug.id === action.payload.id )

        bugs[index].resolved = true
    }
})
//& we no longer need any default statement and the redux-toolkit provide it automatically for us


//# let lastId = 0 
//#  const reducer = (state =[] , action) =>{
//#     switch(action.type){
//#         case bugAdded.type:    //we can pass the type prop from bugAdded obj
//#         return [
//#             ...state , 
//#             {
//#                 id: ++lastId,
//#                 description: action.payload.description,
//#                 resolved: false
//#             }
//#         ] 
//#         case bugRemoved.type:   
//#             return state.filter(bug => bug.id !== action.payload.id)
//#         case bugResolved.type :
//#             return state.map( bug => bug.id === action.payload.id
//#                                     ? {...bug , resolved:true} : bug)

//#         default: 
//#             return state;
//#     }
//# }
//# export default reducer


