import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      return data.products;
    }
  );

const productSlice = createSlice({
    name:"products",
    initialState:{
        items:[],
        loading:false,
        error:null,
    },
    reducers:{},
    extraReducers: (builder) => {
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

export default productSlice.reducer;