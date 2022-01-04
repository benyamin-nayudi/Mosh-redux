import axios from "axios"

// this is just a simulatin of the real actions so we will copy it in the index.js
// const action = {
//     type:'apiCallBegan' ,
//     payload:{
//         url:'/bugs' , 
//         method: get , 
//         data : {}, 
//         onSuccess : 'bugReceived' ,
//         onError : 'apiRequestFailed'
//     }
// }


const api = ({dispatch}) => next => async action =>{
    if(action.type !== 'apiCallBegan') return next(action)
    next(action)
    const {url , method , data , onSuccess , onError}  = action.payload

    try{
        const response = await axios.request({
            baseURL:'http://localhost:9001/api' ,
            url ,
            method,
            data
        })
        dispatch({type: onSuccess , payload: response.data})
    }catch(err){
        dispatch({type: onError , payload: error})
    }
}

export default api