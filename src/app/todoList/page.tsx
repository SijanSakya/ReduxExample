"use client"
import React from 'react'

import Todo from '@/components/todo'
import { useAppSelector } from '@/redux/hook';

function TodoList() {
  // const text = useAppSelector((state) => state.todoReducer.value.text);
  return (
    <div>
       {/* <Todo List= {text}/> */}
    </div>
  )
}

export default TodoList