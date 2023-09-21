import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
let initialState={data:[]}

export let DetailsApi:any=createAsyncThunk("Details",async (x:Number)=>{
    let response=await axios.get(`https://fakestoreapi.com/products/${x}`)
return response.data

})

let Detailsslice=createSlice({
    name:"Details",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(DetailsApi.fulfilled,(state,action)=>{
            state.data=action.payload
        })
    }
})

export let DetailsReducer=Detailsslice.reducer