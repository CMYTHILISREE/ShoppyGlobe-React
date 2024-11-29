// Import Redux Toolkit utilities for creating slices and async actions
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define an asynchronous thunk to fetch products from an API
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      return data.products;
    }
  );
// Create a slice for product state management
const productSlice = createSlice({
    name:"products",
    initialState:{
        items:[],
        loading:false,
        error:null,
    },
    reducers:{},// No standard reducers, only async actions
    extraReducers: (builder) => {
        // Handle additional reducers for async thunk actions
        builder.addCase(fetchProducts.pending, (state) => {
        state.loading = true;
    }).addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
    }).addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load products';
    });

    },

});
// Export the reducer for integration into the Redux store
export default productSlice.reducer;