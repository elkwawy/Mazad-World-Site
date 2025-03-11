import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser, signupUser } from "@/redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { path } from "@/constant/paths";

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, status, error } = useSelector((state) => state.user);

  const handleLogin = async (values) => {
    const resultAction = await dispatch(loginUser(values));
    if (loginUser.fulfilled.match(resultAction)) {
      navigate(`/`);
    }
  };

  const handleSignup = async (values) => {
    const resultAction = await dispatch(signupUser(values));
    if (signupUser.fulfilled.match(resultAction)) {
      navigate(`/${path.main}/dashboard`);
    }
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate(`/${path.main}/authentication`);
  };

  return { handleLogin, handleSignup, handleLogout, user, status, error };
};

export default useAuth;
