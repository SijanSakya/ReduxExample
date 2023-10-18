"use client";
import { useState } from "react";
import { login, logout } from "@/redux/features/auth-slice";
import {useDispatch} from 'react-redux'
import { AppDispatch } from "@/redux/store";
import Link from "next/link";

const Login = () => {
  const [username, setUsername] = useState("");

  const dispatch = useDispatch<AppDispatch>()
  const OnLogin = () => {
    dispatch(login(username))
  };
  const OnLogout = () => {};
  const OnModerator = () => {};


  return (
    <div>
      <h1 className="text-center">Login page</h1>
      <form className="flex flex-col gap-2 items-center pt-5">
        <div>
          <label>Username : </label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            className="border-2 border-black"
          />
        </div>

        <div className="flex gap-4">
          <button onClick={OnLogin()} className="bg-blue-200  border-black/20 border-2 px-2 py-1">LogIn</button>
          <button onClick={OnLogout()} className="bg-blue-200  border-black/20 border-2 px-2 py-1">LogOut</button>
        </div>

        <button onClick={OnModerator()} className="bg-blue-200  border-black/20 border-2 px-2 py-1">Moderator</button>
        
      </form>
      
    </div>
  );
};

export default Login;
