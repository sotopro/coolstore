import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import cartReducer from './cart/cart.slice';
import { categoriesApi } from './categories/api';
import categoriesReducer from './categories/categories.slice';
import productsReducer from './products/products.slice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(categoriesApi.middleware),
});

setupListeners(store.dispatch);
