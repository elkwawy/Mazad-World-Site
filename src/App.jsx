import "./App.css";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "@/layouts/Navbar";
import LandingPage from "@/features/landingPage/LandingPage";
import SignUp from "@/features/auth/pages/SignUp";
import Login from "@/features/auth/pages/Login";
import ResetPassword from "@/features/auth/pages/ResetPassword";
import ForgetPassword from "@/features/auth/pages/ForgetPassword";
import EmailVerification from "@/features/auth/pages/EmailVerification";
import ContactUs from "@/features/contactUs/ContactUs";
import NotFound from "@/pages/NotFound";
import AboutUs from "@/pages/AboutUs";
import Footer from "@/layouts/Footer";
import CategoriesPage from "@/features/categories/CategoriesPage";
import NewsDetails from "@/pages/NewsDetails";
import BestDealsPage from "./features/bestDeals/BestDealsPage";
import DealDetails from "./components/DealDetails";
import AuctionsPage from "./features/Auctions/AuctionsPage";
function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/forgetPassword" element={<ForgetPassword />} />
        <Route
          path="/login/forgetPassword/ResetPassword"
          element={<ResetPassword />}
        />
        <Route path="/EmailVerification" element={<EmailVerification />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/newsDetails/:id" element={<NewsDetails />} />
        <Route path="/bestDeals" element={<BestDealsPage />} />
        <Route path="/deal/:id" element={<DealDetails />} />
        <Route path="/auctions" element={<AuctionsPage />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
