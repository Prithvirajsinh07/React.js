import { configureStore } from '@reduxjs/toolkit';
import productReducer from './feature/ProductSlice'; // Fixed import

// Configure the store
export default configureStore({
  reducer: {
    product: productReducer, // Using the correct reducer name
  },
});