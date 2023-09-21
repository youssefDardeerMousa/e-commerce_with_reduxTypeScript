import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
let initialState={data:[]}

export let electronicApi:any=createAsyncThunk("electronic",async ()=>{
    let response=await axios.get("https://fakestoreapi.com/products/category/electronics")
return response.data

})

let electronicslice=createSlice({
    name:"electronic",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(electronicApi.fulfilled,(state,action)=>{
            state.data=action.payload
        })
    }
})

export let electronicReducer=electronicslice.reducer