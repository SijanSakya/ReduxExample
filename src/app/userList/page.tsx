"use client"
import User from '@/components/userList/user'
import React from 'react'
import { useAppSelector } from '@/redux/hook';

const UserList = () => {
    const name = useAppSelector((state) => state.userReducer);
    const email = useAppSelector((state) => state.userReducer);
   

  return (
    <div>
        <User />
    </div>
  )
}

export default UserList