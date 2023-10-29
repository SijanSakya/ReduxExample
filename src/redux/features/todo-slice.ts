import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TodoState = {
  text: string;
  id: number;
};

type InitialState = {
  value: TodoState;
};
const initialState: TodoState[] = [];

export const todo = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<TodoState>) => {
      state.push(action.payload);
    },
    deleteData :(state , action:  PayloadAction<number>)=>{
        return state.filter(text => text.id !== action.payload);
    },
    // editUser: (state, action: PayloadAction<UserState>) => {
    //     const index = state.findIndex(user => user.id === action.payload.id);
    //     if (index !== -1) {
    //         state[index] = action.payload;
    //     }
  },
});

export const { addData , deleteData } = todo.actions;
export default todo.reducer;
