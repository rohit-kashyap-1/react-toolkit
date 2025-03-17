import { createSlice } from "@reduxjs/toolkit";
const TodoSlice = createSlice({
    name:'todo',
    initialState:{todos:[]},
    reducers:{
        add:function(state,action){
            state.todos.push(action.payload) //"kal mujhe kahi jana hai", {title:"mujhe kal kahi jana hai",date:"2025-03-17"}
            console.log('added')
        },
        remove:function(state,action){
            let todos  = []
            //1
            todos = state.todos.filter(function(item){
                if(item.id!==action.action.payload){
                    return item
                }
            })

            state.todos = todos
            console.log('removed')
        }
    }
})

export const {add,remove} = TodoSlice.actions;
export default TodoSlice.reducer; 