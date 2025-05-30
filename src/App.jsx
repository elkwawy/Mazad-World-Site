import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "@/layouts/Navbar";
import LandingPage from "@/features/landingPage/LandingPage";
import SignUp from "@/features/auth/pages/SignUp";
import Login from "@/features/auth/pages/Login";
import ContactUs from "@/features/contactUs/ContactUs";
import Footer from "@/layouts/Footer";
import CategoriesPage from "@/features/categories/CategoriesPage";

import AuctionsPage from "@/features/auctions/AuctionsPage";
import NotFound from "@/staticPages/NotFound";
import NewsDetails from "@/features/LatestNews/components/NewsDetails";
import AboutUs from "@/features/AboutUs/AboutUs";
import DealDetails from "@/components/DealDetails";
import { Toaster } from "react-hot-toast";
import AuctionDetails from "./features/auctions/components/AuctionDetails";
import AuctionsCategory from "./features/categories/AuctionsCategory";
import { fetchCategories } from "./features/categories/categoriesSlice";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { status: statusCategories } = useSelector((state) => state.categories);
  useEffect(() => {
    if (statusCategories === "idle") {
      dispatch(fetchCategories());
    }
  }, [dispatch, statusCategories]);
  return (
    <div className="App">
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/newsDetails/:id" element={<NewsDetails />} />
        <Route path="/deal/:id" element={<DealDetails />} />
        <Route path="/auctions" element={<AuctionsPage />} />
        <Route path="/auction/:id" element={<AuctionDetails />} />

        <Route path="/categories/:id" element={<AuctionsCategory />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
