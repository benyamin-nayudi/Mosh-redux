
// instead of these imports at above we :
import { configureStore } from '@reduxjs/toolkit'
import reducer from './project'


export default function configureAppStore(){

    return configureStore({ reducer })
    
}