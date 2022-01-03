
import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'

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


//* this function can be expensive so we can use the reselect library that uses memoization to cache the outputs
//# export const getUnresolvedBugs = state =>{
//#    return state.entities.bugs.filter(bug => !bug.resolved)
//# }



//& we can pass two selectors to this function . the first one is the state selector that returns the bugs objects.
//& the second one is the result function and it filters out the unResolved bugs.

export const getUnresolvedBugs = createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter( bug => !bug.resolved) // this logic won't be executed if the list of bugs didn't change and returns the result from the cache.
)


//we also can have multiple selectors . in this case if the state of bugs and projects remain the same , the result function won't be invoked
export const getUnresolvedBugs2 = createSelector(
    state => state.entities.bugs,
    state => state.entities.projects,
    (bugs , projects ) => bugs.filter(bug => !bug.resolved )
)