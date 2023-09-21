import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
let initialState={data:[]}

export let MenApi:any=createAsyncThunk("Men",async ()=>{
    let response=await axios.get("https://fakestoreapi.com/products/category/men's clothing")
return response.data

})

let Menslice=createSlice({
    name:"Men",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(MenApi.fulfilled,(state,action)=>{
            state.data=action.payload
        })
    }
})

export let MenReducer=Menslice.reducer