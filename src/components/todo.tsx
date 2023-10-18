'use client'
import React, { useState } from 'react'
import {Delete } from "@/redux/features/todo-slice";
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';


interface TodoProps{
    List: []
}
const Todo: React.FC<TodoProps> = ({List}) => {
    const [text , setText]= useState("")
    
    const dispatch = useDispatch<AppDispatch>()
    const onEnter =()=>{
        // dispatch(Enter(text))
    }
  return (
    <div className='flex flex-col items-center'>
        <h1>TodoList</h1>
        <div>
            <form>
                <input type="text" onChange={(e)=>setText(e.target.value)} className='border-2 border-black/40' />
                <button type='button' onClick={onEnter}>Enter</button>
            </form>
            <p>{List}</p>
        </div>
    </div>
  )
}

export default Todo