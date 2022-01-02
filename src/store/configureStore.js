// import {createStore } from 'redux'
// import { devToolsEnhancer } from 'redux-devtools-extension'

// instead of these imports at above we :
import { configureStore } from '@reduxjs/toolkit'
import reducer from './bugs'



// we can remove this :

//# export default function configureStore(){
//#     const store = createStore(reducer ,devToolsEnhancer({trace: true}))
//#     return store;
//# }


//$ make sure to not have naming problems . you can change the name or just make it anonymous function

export default function configureAppStore(){

    //* this configureStore function automatically makes our store to talks to redux devTools. we just pass it the reducer that we imported from bugs folder. and we can easily return the function 
    return configureStore({ reducer })
    
}