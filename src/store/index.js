import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cart/cart.slice';
import categoriesReducer from './categories/categories.slice';
import productsReducer from './products/products.slice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
  },
});
