
import { configureStore  } from '@reduxjs/toolkit'
import reducer from './reducer'
import logger from './middleware/logger'


//# we no longer need it
//# import func from './middleware/func'

//# export default function configureAppStore(){
//#    return configureStore({ 
//#         reducer , 
//#         middleware:[logger({destination: 'console'}) , func] 
//#     })    
//# }


// lets use thunk
export default function configureAppStore(){
   return configureStore({ 
        reducer , 
        middleware: (getDefaultMiddleware) => [
            ...getDefaultMiddleware() , 
            logger({destination: 'console'}) 
        ] 
    })    
}