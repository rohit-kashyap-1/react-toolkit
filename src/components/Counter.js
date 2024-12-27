import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { increment,decrement } from './counterSlice'

export default function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state)=>state.counter.value)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(increment())}>Increment</button>
    </div>
  )
}
