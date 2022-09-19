import { configureStore } from "@reduxjs/toolkit";
import { getUsersReducer } from "../redux/getUserSlicer";

export const store = configureStore({
    reducer: {
        users: getUsersReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch