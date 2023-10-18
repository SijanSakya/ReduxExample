
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = [];
  
  type TodoState = {
    
    text: string;
    uid: string;
    
   
  };
  const initialState = {
      value: {
          text: "",
          uid: "",
      } as TodoState,
  } as unknown as InitialState;
  
  export const todo = createSlice({
    name: "Todo",
    initialState,
    reducers: {
      Delete: () => {
        return initialState;
      },
     
     
    },
  });
  
export const { Delete} = todo.actions;
export default todo.reducer;