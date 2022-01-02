 import { createAction , createReducer } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

// we don't need this actionCreators anymore
//# action creators
 export const bugAdded = createAction('bugAdded')
 export const bugResolved =createAction('bugResolved')
 export const bugRemoved =createAction('bugRemoved')


//$========== reducers 



// also we don't need this createReducer also.
 export default createReducer([] , {
    
         [bugAdded.type] : (bugs , action) => {
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




//* instead of creating actionCreators and reducers we can use createSlice function . it is simply make for us actionCreators and reducers.
// we create the createSlice and give it the configuration object.
let lastId = 0 

 const slice = createSlice({
    name : 'bugs',
    initialState : [] , 
    reducers: {

        // this is the first property of our reducer and it has an actionCreator (bugAdded) and a reducer (the function after it)
        
        bugAdded : (bugs , action ) =>{ 
            bugs.push({
                id: ++lastId , 
                description: action.payload.description , 
                resolved: false
            })
        } , 

        bugResolved : (bugs , action) =>{
            const index = bugs.findIndex( bug => bug.id === action.payload.id)
            bugs[index].resolved = true
        }
    }
})

console.log(slice)