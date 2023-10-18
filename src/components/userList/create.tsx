"use client"
import { addUser ,deleteUser} from '@/redux/features/user-slice'
import { useAppSelector } from '@/redux/hook'
import { AppDispatch } from '@/redux/store'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'

interface addProps {
    setShowBox:any
}
const Create: React.FC<addProps> = ({setShowBox}) => {
    const router = useRouter();
    const [name ,setName]= useState("")
    const [email ,setEmail]= useState("")

    

    const users =useAppSelector((state) => state.userReducer); 
    const dispatch = useDispatch<AppDispatch>()

    const handleSubmit=(e:any)=>{
    e.preventDefault()
    const newId = users.length > 0 ? users[users.length-1].id + 1 : 1;
    dispatch(addUser({id: newId , name , email}))
    setShowBox(false)
    }
 
  return (
    <div>
        <h1 className='text-center'>Add user</h1>
        <form  onSubmit ={handleSubmit} className='flex flex-col px-10 py-10 gap-2 justify-center' >
            
            <div>
            <label>Name: </label>
            <input type='text' onChange={(e)=>setName(e.target.value)} className='border-2 border-black/20' />
            </div>
            <div>
            <label>Email: </label>
            <input type='email'onChange={(e)=>setEmail(e.target.value)} className=' border-2 border-black/20'  />
            </div>

            <button type='submit' className='text-center border-2 border-black/40 bg-green-400' >Enter</button>
           
        </form>
    </div>
  )
}

export default Create