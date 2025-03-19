import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Create the async thunk to fetch card data
export const fetchCard = createAsyncThunk('card/fetchCard', async () => {
  const response = await axios.get('http://localhost:5000/products');
  return response.data;
});

// Define the product slice
const productSlice = createSlice({
  name: 'product',
  initialState: {
    cart: [],
  },
  reducers: {
    // Action for incrementing or decrementing (ensure you have a value if needed)
    incremented: state => {
      // You need to define 'value' in the initialState if you want to increment
      // state.value += 1;
    },
    decremented: state => {
      // state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCard.fulfilled, (state, action) => {
      state.cart = action.payload;
      console.log(state.cart);
    });
  },
});

// Export the actions
export const { incremented, decremented } = productSlice.actions;

// Export the reducer
export default productSlice.reducer;
