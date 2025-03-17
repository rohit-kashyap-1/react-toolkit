import { configureStore } from "@reduxjs/toolkit";
import counterReducer  from './counterSlice'
import accountReducer from './accountSlice'
import todoReducer from './TodoSlice'

const store = configureStore({
    reducer:{
        counter:counterReducer,
        account:accountReducer,
        todo_store:todoReducer
    }
})

export default store;