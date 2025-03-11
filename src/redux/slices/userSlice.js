import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { path } from "@/constant/paths";
import axiosInstance from "@/hooks/axiosInstance";
import { showToast } from "@/utils/showToast";

export const loginUser = createAsyncThunk(
  "user/login",
  async (values, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("site/login", values);
      const userData = response.data;
      const accessToken = userData?.token;

      if (!accessToken) throw new Error("Invalid token received!");

      Cookies.set(path.token, accessToken, { expires: 4, secure: true });
      Cookies.set(path.user, JSON.stringify(userData));

      showToast("success", "Login successful!");
      return userData;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "An unexpected error occurred!"
      );
    }
  }
);

export const signupUser = createAsyncThunk(
  "user/signup",
  async (values, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("site/register", values);
      const userData = response.data;
      const accessToken = userData?.token;

      if (!accessToken) throw new Error("Invalid token received!");

      Cookies.set(path.token, accessToken, { expires: 4, secure: true });
      Cookies.set(path.user, JSON.stringify(userData));

      showToast("success", "Signup successful!");
      return userData;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "An unexpected error occurred!"
      );
    }
  }
);

export const logoutUser = createAsyncThunk(
  "user/logout",
  async (_, { dispatch }) => {
    Cookies.remove(path.token);
    Cookies.remove(path.user);
    showToast("success", "Logout successful!");
    dispatch(clearUser());
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: JSON.parse(Cookies.get(path.user) || "null"),
    status: "idle",
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      Cookies.set(path.user, JSON.stringify(action.payload));
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signupUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
