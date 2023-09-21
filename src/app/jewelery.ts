import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
let initialState={data:[]}

export let jeweleryApi:any=createAsyncThunk("jewelery",async ()=>{
    let response=await axios.get("https://fakestoreapi.com/products/category/jewelery")
return response.data

})

let jeweleryslice=createSlice({
    name:"jewelery",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(jeweleryApi.fulfilled,(state,action)=>{
            state.data=action.payload
        })
    }
})

export let jeweleryReducer=jeweleryslice.reducer