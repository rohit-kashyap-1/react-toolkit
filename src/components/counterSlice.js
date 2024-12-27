import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter',
    initialState:{value:0},
    reducers:{
        increment:function(state){
            state.value +=1
        },
        decrement:function(state){
            state.value -=1
        }
    }
})


//counterSlice.actions =  reducers
export const {increment,decrement} =  counterSlice.actions
export default counterSlice.reducer