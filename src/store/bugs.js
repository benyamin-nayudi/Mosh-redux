
import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { apiCallBegan } from './api'
import moment from 'moment'


// let lastId = 0 

 const slice = createSlice({
    name : 'bugs',
    initialState : {
        list: [] , 
        loading: false,
        lastFetch: null
    } , 
    reducers: {
        bugAdded : (bugs , action ) =>{ 
            // bugs.list.push({
            //     id: ++lastId , 
            //     description: action.payload.description , 
            //     resolved: false 
            // })
            bugs.list.push(action.payload)
        } , 

        bugResolved : (bugs , action) =>{
            const index = bugs.list.findIndex( bug => bug.id === action.payload.id)
            bugs.list[index].resolved = true
        } ,
        bugAssignToUser : ( bugs ,action )=>{
            const { bugId , userId} = action.payload;
            const index = bugs.list.findIndex( bug => bug.id === bugId)
            bugs.list[index].userId = userId
        },
        bugsReceived: (bugs , action) =>{
            bugs.list = action.payload
            bugs.loading= false,
            bugs.lastFetch = Date.now()
        },
        bugsRequested : (bugs , action) =>{
            bugs.loading = true
        },
        bugsRequestFailed : (bugs , action) =>{
            bugs.loading = false
        }
    }
})

export const {bugAdded , bugResolved  , bugAssignToUser , bugsReceived , bugsRequested ,bugsRequestFailed}  = slice.actions
export default slice.reducer


// actionCreators 
const url = '/bugs'

export const loadBugs = () => (dispatch , getState) =>{
    const {lastFetch} = getState().entities.bugs

    const diffInMinutes = moment().diff(moment(lastFetch) , 'minutes')
    if(diffInMinutes < 10) return ;

    dispatch(apiCallBegan({
        url , 
        onStart: bugsRequested.type,
        onSuccess : bugsReceived.type ,
        onError: bugsRequestFailed.type
    })) 

}


export const addBug = bug => apiCallBegan({
    url, 
    method: "post" , 
    data : bug ,
    onSuccess: bugAdded.type
})



// selectors

export const getUnresolvedBugs = createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter( bug => !bug.resolved) 
)

export const getUnresolvedBugs2 = createSelector(
    state => state.entities.bugs,
    state => state.entities.projects,
    (bugs , projects ) => bugs.filter(bug => !bug.resolved )
)



export const  getBugsByUser = userId =>  createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => bug.userId === userId)
)
