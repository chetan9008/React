import { createSlice } from "@reduxjs/toolkit";
import cartItems from "./../../cartItems";
const initialState = {
  cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (store) => {
      store.cartItems = [];
    },
    removeCart: (store, action) => {
      let id = action.payload;
      store.cartItems = store.cartItems.filter((value) => value.id !== id);
    }
  },
});

console.log(cartSlice);

export let { clearCart,removeCart } = cartSlice.actions;

export default cartSlice.reducer;
