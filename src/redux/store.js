import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@/redux/slices/userSlice";
import categoriesSlice from "@/features/categories/categoriesSlice";
import auctionsSlice from "@/features/auctions/auctionsSlice";
import faqsSlice from "@/features/faqs/faqsSlice";
import sellersSlice from "@/features/sellers/sellersSlice";
import latestNewsSlice from "@/features/LatestNews/latestNewsSlice";
import customersSlice from "@/redux/slices/customersSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    categories: categoriesSlice,
    auctions: auctionsSlice,
    sellers: sellersSlice,
    latestNews: latestNewsSlice,
    faqs: faqsSlice,
    customers: customersSlice,
  },
});

export default store;
