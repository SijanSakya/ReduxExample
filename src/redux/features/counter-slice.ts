import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: 0;
};

const initialState = {
  value: 0
} as InitialState;

export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    reset: () => {
        return initialState;
      },
    increment: (state) => {
       state.value +=1
    },
    decrement: (state) => {
        state.value -=1
     },
   
  },
});

export const {reset ,increment, decrement} = counter.actions;
export default counter.reducer;