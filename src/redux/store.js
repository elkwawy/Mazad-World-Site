import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@/redux/slices/userSlice";
import productsSlice from "@/features/Products/productsSlice";
import categoriesSlice from "@/features/categories/categoriesSlice";
import auctionsSlice from "@/features/auctions/auctionsSlice";
import faqsSlice from "@/features/faqs/faqsSlice";
import sellersSlice from "@/features/sellers/sellersSlice";
import latestNewsSlice from "@/features/LatestNews/latestNewsSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    products: productsSlice,
    categories: categoriesSlice,
    auctions: auctionsSlice,
    sellers: sellersSlice,
    latestNews: latestNewsSlice,
    faqs: faqsSlice,
  },
});

export default store;
