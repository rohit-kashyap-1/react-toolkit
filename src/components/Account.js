import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { deposite,withdraw } from './accountSlice'

export default function Account() {
    const dispatch = useDispatch()
    const [amount,setAmount] = useState(0)
    const balance = useSelector((state)=>state.account.balance)
  return (
    <div>
      <h1>Balance: {balance}</h1>
      <hr />
      <input type='number' min={1} value={amount} onChange={(e)=>setAmount(e.target.value)} />
      <button onClick={()=>{dispatch(deposite(amount))}}>Deposite</button>
    </div>
  )
}
