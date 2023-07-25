import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.items.find((item) => item.id === action.payload.id);
      if (
        itemInCart &&
        state.items.find((item) => item.id === action.payload.id)?.quantity === itemInCart?.stock
      ) {
        return;
      }

      if (itemInCart?.stock > itemInCart?.quantity) {
        itemInCart.quantity += 1;
      }
      if (!itemInCart) {
        state.items.push(action.payload);
      }
    },
    increaseItemQuantity: (state, action) => {
      const itemInCart = state.items.find((item) => item.id === action.payload.id);
      if (itemInCart && itemInCart.stock > itemInCart.quantity) {
        itemInCart.quantity += 1;
      }
    },
    decreaseItemQuantity: (state, action) => {
      const itemInCart = state.items.find((item) => item.id === action.payload.id);
      if (itemInCart && itemInCart.quantity > 1) {
        itemInCart.quantity -= 1;
      }
    },
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, increaseItemQuantity, decreaseItemQuantity, removeItemFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
