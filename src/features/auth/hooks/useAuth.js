import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { UserContext } from "@/context/UserProvider";
import { path } from "@/constant/paths";
import axiosInstance from "@/hooks/axiosInstance";
import { showToast } from "@/utils/showToast";
import { Toaster } from "react-hot-toast";

const useAuthHook = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const handleLogin = async (values) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post("site/login", values);
      console.log(response);

      const userData = response.data;
      const accessToken = userData?.token;

      if (!accessToken) throw new Error("Invalid token received!");

      setUser(userData);
      Cookies.set(path.token, accessToken, { expires: 4, secure: true });
      showToast("success", "Login successful!");
      navigate(`/`);
    } catch (error) {
      console.error("Login Error:", error);

      const errorMessage =
        error?.response?.data?.message || "An unexpected error occurred!";
      showToast("error", errorMessage);

      if (error.response?.status === 422) {
        console.warn("Unprocessable Entity: Invalid input data.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (values) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post("site/register", values);
      console.log(response);

      const userData = response.data;
      const accessToken = userData?.token;

      if (!accessToken) throw new Error("Invalid token received!");

      setUser(userData);
      Cookies.set(path.token, accessToken, { expires: 4, secure: true });
      showToast("success", "Signup successful!");
      navigate(`/${path.main}/dashboard`);
    } catch (error) {
      console.error("Signup Error:", error);

      const errorMessage =
        error?.response?.data?.message || "An unexpected error occurred!";
      showToast("error", errorMessage);

      if (error.response?.status === 422) {
        console.warn("Unprocessable Entity: Invalid input data.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    Cookies.remove(path.token);
    Cookies.remove(path.user);
    navigate(`/${path.main}/authentication`);
    message.success("Logout successful!");
  };

  return { handleLogin, handleSignup, handleLogout, loading, user };
};

export default useAuthHook;
