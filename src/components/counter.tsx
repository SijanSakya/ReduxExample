import React, { useState } from 'react'
import { reset ,increment, decrement} from "@/redux/features/counter-slice";
import {useDispatch} from 'react-redux'
import { AppDispatch } from '@/redux/store';

interface counterProps{
    value: number
}
const Counter:React.FC<counterProps> = ({value}) => {
    
    const dispatch = useDispatch<AppDispatch>()
    const add =()=>{
        dispatch(increment())
    }
    const sub =()=>{
        dispatch(decrement())
    }
    const resetValue =()=>{
        dispatch(reset())
    }
  return (
    <div className='flex flex-col'>
        <div className='flex gap-3 '>
        <button type='button' onClick={sub}>-</button>
        {value}
        <button type='button' onClick={add}>+</button>

        </div>
        <button type='button' onClick={resetValue}>Reset</button>

        
    </div>
  )
}

export default Counter