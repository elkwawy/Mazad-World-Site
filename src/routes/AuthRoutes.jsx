import SignUp from "@/features/auth/pages/SignUp";
import Login from "@/features/auth/pages/Login";
import ResetPassword from "@/features/auth/pages/ResetPassword";
import ForgetPassword from "@/features/auth/pages/ForgetPassword";
import EmailVerification from "@/features/auth/pages/EmailVerification";

const AuthRoutes = () => {
  return { SignUp, Login, ResetPassword, ForgetPassword, EmailVerification };
};

export default AuthRoutes;
