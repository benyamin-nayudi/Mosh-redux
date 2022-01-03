
import { createSlice } from '@reduxjs/toolkit'


let lastId = 0 

 const slice = createSlice({
    name : 'bugs',
    initialState : [] , 
    reducers: {

       
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

export const {bugAdded , bugResolved }  = slice.actions
export default slice.reducer


// this is the selector function, and its job is to return the computed state. in this example it gets the state and returns the unResolved bugs.
export const getUnresolvedBugs = state =>{
   return state.entities.bugs.filter(bug => !bug.resolved)
}