import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userList } from "@/data/userList";

type UserState =  {
    id: number;
    name: string;
    email: string;
  }

type InitialState = {
  value: UserState;
};

const initialState: UserState[] = [];

export const user = createSlice({
  name: "user",
  initialState: userList,
  reducers: {
    addUser :(state , action: PayloadAction<UserState>)=>{
        state.push(action.payload)
    },
    deleteUser :(state , action:  PayloadAction<number>)=>{
        return state.filter(user => user.id !== action.payload);
    },
    editUser: (state, action: PayloadAction<UserState>) => {
        const index = state.findIndex(user => user.id === action.payload.id);
        if (index !== -1) {
            state[index] = action.payload;
        }
        
},
  
}});

export const {addUser , deleteUser , editUser} = user.actions;
export default user.reducer;