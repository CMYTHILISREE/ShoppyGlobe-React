import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",// Name of the slice, used to reference the slice in the store
  initialState: {
    items: [],// Initial state of the cart, starting with an empty array of items
  },
  reducers: {
    // Reducer to add an item to the cart
    addItemToCart: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
        // Check if the item already exists in the cart
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
     // Reducer to remove an item from the cart
    removeItemFromCart: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
           // If the item quantity is 1, remove it from the cart
          state.items = state.items.filter((item) => item.id !== itemId);
        }
      }
    },
     // Reducer to clear all items from the cart
    clearCart: (state) => {
      // Reset the items array to an empty array
      state.items = [];
    },
  },
});

// Exporting actions to be used in components
export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;
// Exporting the reducer to be included in the store
export default cartSlice.reducer;
// Selector to get all items in the cart
export const selectCartItems = (state) => state.cart.items;
// Selector to get the total count of unique items in the cart
export const selectCartItemsCount = (state) => state.cart.items.length;

