import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Istate } from "../models/getUserModels";
import axios from "../axios/axios"

export const fetchingUsers = createAsyncThunk("get/users", async () => {
    const { data } = await axios.get("users/random_user?size=10")
    return data
})

const initialState: Istate = {

    list: [
        {rating: 0 }
    ],
    loading: false,
    error: "",
    
}

const getuserSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        incrementRatting(state){
            state.list[0].rating++
          
        },
        decrementRatting(state){
           state.list[0].rating--
        }
    },
    extraReducers: (build) => {
        build.addCase(fetchingUsers.pending, (state, action: PayloadAction<any>) => {
            state.loading = true
        })

        build.addCase(fetchingUsers.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false
          state.list.concat(action.payload)
        })

        build.addCase(fetchingUsers.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false
            state.list.users = []
            state.error = "error"
        })
    },
})

export const {incrementRatting, decrementRatting} = getuserSlice.actions

export const getUsersReducer = getuserSlice.reducer