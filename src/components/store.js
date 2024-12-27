import { configureStore } from "@reduxjs/toolkit";
import counterReducer  from './counterSlice'
import accountReducer from './accountSlice'

const store = configureStore({
    reducer:{
        counter:counterReducer,
        account:accountReducer
    }
})

export default store;