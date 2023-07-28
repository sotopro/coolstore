import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import cartReducer from './cart/cart.slice';
import { categoriesApi } from './categories/api';
import categoriesReducer from './categories/categories.slice';
import { ordersApi } from './orders/api';
import { productsApi } from './products/api';
import productsReducer from './products/products.slice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoriesApi.middleware,
      productsApi.middleware,
      ordersApi.middleware
    ),
});

setupListeners(store.dispatch);
