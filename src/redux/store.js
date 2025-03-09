import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "@/features/Products/productsSlice";
import categoriesSlice from "@/features/categories/categoriesSlice";

const store = configureStore({
  reducer: {
    products: productsSlice,
    categories: categoriesSlice,
  },
});

export default store;
