import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
    name:'account',
    initialState:{balance:0},
    reducers:{
        deposite:function(state,action){
            state.balance +=Number(action.payload)
        },
        withdraw:function(state,action){
            state.balance -=Number(action.payload)
        }
    }
})

export const {deposite,withdraw} = accountSlice.actions
export default accountSlice.reducer