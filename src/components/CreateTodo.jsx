import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from './TodoSlice'

export default function CreateTodo() {

    const dispatch = useDispatch()
    const [title,setTitle] =  useState('')
    const [date,setDate] =  useState('')


  return (
    <div>
        <h3>Create Todo</h3>
        <input type='text' placeholder='Enter title' onChange={(e)=>{setTitle(e.target.value)}} value={title}/>
        <input type='date' onChange={(e)=>{setDate(e.target.value)}} value={date} />
        <button onClick={()=>{dispatch(add({title,date}))}}>Add</button>
    </div>
  )
}
