import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
let initialState={data:[]}

export let womenApi:any=createAsyncThunk("women",async ()=>{
    let response=await axios.get("https://fakestoreapi.com/products/category/women's clothing")
return response.data

})

let womenslice=createSlice({
    name:"women",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(womenApi.fulfilled,(state,action)=>{
            state.data=action.payload
        })
    }
})

export let womenReducer=womenslice.reducer