import {configureStore} from '@reduxjs/toolkit'
import authReducer from './features/auth-slice'
import counterReducer from './features/counter-slice'
import todoReducer from './features/todo-slice'
import userReducer from './features/user-slice'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { setupListeners } from "@reduxjs/toolkit/dist/query";


export const store = configureStore({
    reducer: {
        authReducer,
        counterReducer,
        todoReducer,
        userReducer,
    },
})

setupListeners(store.dispatch);

export type RootState= ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;