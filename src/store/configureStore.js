
// instead of these imports at above we :
import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer'


export default function configureAppStore(){

    return configureStore({ reducer })
    
}