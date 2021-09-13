import {configureStore} from '@reduxjs/toolkit'

import counterReducer from './counter'
import authReducer from './auth'

//store will be same for all the slices 
const store = configureStore({
    reducer: {counter: counterReducer, auth: authReducer}
})

//exporting actions

export default store