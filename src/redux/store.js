import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "@/features/Products/productsSlice";
import categoriesSlice from "@/features/categories/categoriesSlice";
import auctionsSlice from "@/features/auctions/auctionsSlice";

const store = configureStore({
  reducer: {
    products: productsSlice,
    categories: categoriesSlice,
    auctions: auctionsSlice,
  },
});

export default store;
