import { bugAdded } from "./store/bugs";
import configureStore from "./store/configureStore";


const store = configureStore();

// store.dispatch((dispatch , getState )=>{
   // dispatch({type: 'bugReceived' , bugs: [1,2,3]})
   // console.log(getState())
// })

// store.dispatch({
//    type: 'error',
//    payload: {message : 'An error occured.'}
// })



store.dispatch({
  type:'apiCallBegan' ,
  payload:{
      url:'/bugs' , 
    //   method: get ,  the default is to get
    //   data : {}, we don't need it for now
      onSuccess : 'bugReceived' ,
      onError : 'apiRequestFailed'
  }
})
