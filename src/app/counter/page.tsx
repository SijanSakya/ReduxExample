"use client"
import Counter from '@/components/counter'
import Login from '@/components/login'
import { useAppSelector } from '@/redux/hook';
import React from 'react'

function page () {
    const username = useAppSelector((state) => state.authReducer.value.username);
    const moderator = useAppSelector((state) => state.authReducer.value.isModerator);
    const isAuth = useAppSelector((state) => state.authReducer.value.isAuth);
    const value = useAppSelector((state) => state.counterReducer.value);
  return (
    <div>
         <Login />
       <h1>Username:{username}</h1>
        {moderator && <p>This user is moderator</p>  }

        <Counter value={value}/>
    </div>
  )
}

export default page