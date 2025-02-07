// Import necessary functions and files
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// Configure the Redux store
const store = configureStore({
  reducer: {
    // Assign the cartReducer to manage the 'cart' slice of the state
    cart: cartReducer,
  },
});

// Export the configured Redux store
export default store;