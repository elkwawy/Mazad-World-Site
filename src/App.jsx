import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import SignUp from "./Auth/SignUp";
import Login from "./Auth/Login";
import ResetPassword from "./Auth/ResetPassword";
import ForgetPassword from "./Auth/ForgetPassword";
import EmailVerification from "./Auth/EmailVerification";
import NotFound from "./Pages/NotFound";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
function App() {
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
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
