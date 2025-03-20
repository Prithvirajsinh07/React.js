import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Create the async thunk to fetch card data
export const fetchCard = createAsyncThunk('card/fetchCard', async () => {
  const response = await axios.get('http://localhost:5000/products');
  return response.data;
});
export const cartCard = createAsyncThunk('card/cartCard', async () => {
  const response = await axios.get('http://localhost:5000/cart');
  return response.data;
});

// Define the product slice
const productSlice = createSlice({
  name: 'product',
  initialState: {
    cart: [],
    addCart :[]
  },
  reducers: {
    AddCart: (state , action) => {
   state.addCart = state.cart.map((e ,i)=> i === action.payload  ? cart[action.payload] : null )
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCard.fulfilled, (state, action) => {
      state.cart = action.payload;
      console.log(state.cart);
    });
  },
});

// Export the actions
export const { AddCart } = productSlice.actions;

// Export the reducer
export default productSlice.reducer;
