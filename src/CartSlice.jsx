import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Add item to the cart
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.name === newItem.name);

      if (existingItem) {
        // If the item already exists, increase its quantity
        existingItem.quantity += 1;
      } else {
        // Otherwise, add the new item with a quantity of 1
        state.items.push({ ...newItem, quantity: 1 });
      }
    },

    // Update the quantity of an item in the cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.name === name);

      if (itemToUpdate) {
        itemToUpdate.quantity = Math.max(1, quantity); // Ensure quantity doesn't go below 1
      }
    },

    // Remove an item from the cart
    removeItem: (state, action) => {
      const itemName = action.payload;
      state.items = state.items.filter((item) => item.name !== itemName);
    },
  },
});

export const { addItem, updateQuantity, removeItem } = CartSlice.actions;

export default CartSlice.reducer;