"use client";
import React, { useState } from "react";
import {} from "@/redux/features/user-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import Link from "next/link";
// import { userList } from "@/data/userList";
import { deleteUser,editUser } from '@/redux/features/user-slice'
import { useAppSelector } from "@/redux/hook";
import Create from "./create";


const User = ({data}:{data:any}) => {
  
  const user =useAppSelector((state) => state.userReducer);
  const [showBox, setShowBox] = useState(false);


  console.log(data)

  const dispatch = useDispatch<AppDispatch>()
  const onClickBtn = () => {
    console.log("dsa");
  };
   
  const handleDelete = (userId: number) => {
    dispatch(deleteUser(userId));
  }
  
 
  const messageBox = () => {
    setShowBox(!showBox);
  };
  return (
    <div className="mx-auto px-44 py-20">
       {showBox && (
        <div className="fixed top-0 left-0 right-0 flex items-baseline justify-center h-screen bg-black bg-opacity-50 z-10">
          <div className="absolute top-10 bg-white rounded shadow-lg p-2 px-3">
            <div className="text-end uppercase">
              <button
                onClick={() => setShowBox(false)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold  px-2  rounded"
              >
                X
              </button>
            </div>
            <div>
              <Create setShowBox={setShowBox}/>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-4">
        <h1>User List</h1>
        <form>
          <button
           
            type="button"
            onClick={messageBox}
            className="border-2 border-black/20 bg-green-600 px-2 py-1"
          >
            Create +
          </button>
        </form>
        <table className="border-2">
          <thead>
            <tr className="border-2">
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user) => (
              <tr key={user.id} className="border-2 text-center">
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link  href={`./userList/updateForm/${user.id}`} type="button" className="border-2 border-black/50 mx-2 px-2 py-1">Edit</Link>
                  <button type="button" onClick={()=>handleDelete(user.id)} className="border-2 border-black/50 px-2 py-1">Delete</button>
                </td>
              </tr>
              
            ))}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
