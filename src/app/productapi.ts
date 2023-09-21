import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: []
};

export const fetchProducts:any = createAsyncThunk("products", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const productsReducer = productsSlice.reducer;
