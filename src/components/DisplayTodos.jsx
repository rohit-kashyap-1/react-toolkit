import React from 'react'
import { useSelector } from 'react-redux'

export default function DisplayTodos() {
    const todos = useSelector((state)=>state.todo_store.todos)
  return (
    <div>
      <h3>Displaying Todos</h3>
      <ul>
        {todos.length!=0?todos.map((item,index)=>{
            return <li key={index}>{item.title}</li>
        }):'No Todos'}
      </ul>
    </div>
  )
}
