"use client";
import React, { useState } from "react";
import { addData } from "@/redux/features//todo-slice";
import { deleteData } from "@/redux/features/todo-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useAppSelector } from "@/redux/hook";

interface TodoProps {}
const Todo: React.FC<TodoProps> = () => {
  const message = useAppSelector((state) => state.todoReducer);
  const [text, setText] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newId = message.length > 0 ? message[message.length - 1].id + 1 : 1;
    dispatch(addData({ id: newId, text }));
  };
  const handleDelete = (textId: number) => {
    dispatch(deleteData(textId));
  };

  return (
    <div className="flex flex-col items-center">
      <h1>TodoList</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            className="border-2 border-black/40"
          />
          <button type="submit">Enter</button>
        </form>
        {message.map((data, index) => (
          <div className="flex gap-3">
            <p>{data.text}</p>
            <button type="button" onClick={() => handleDelete(data.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
