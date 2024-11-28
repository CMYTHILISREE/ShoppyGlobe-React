import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import cartReducer from './cartSlice';

const appStore = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

export default appStore;