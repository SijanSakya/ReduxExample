"use client";
import { addUser } from "@/redux/features/user-slice";
import { useAppSelector } from "@/redux/hook";
import { AppDispatch } from "@/redux/store";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const UpdateUser = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const users = useAppSelector((state) => state.userReducer);

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    // dispatch(addUser({ id: newId, name, email }));
    router.push("/userList");
  };
  return (
    <div>
        <h1 className="text-center">Edit user detail</h1>
      <form onSubmit={handleSubmit} className="flex flex-col px-44 py-20 gap-4">
        
        <div>
          <label>Name: </label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-black/20"
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className=" border-2 border-black/20"
          />
        </div>

        <button type="submit" className="text-start px-2 py-1 border-2 border-black/50 w-14">
          Enter
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
