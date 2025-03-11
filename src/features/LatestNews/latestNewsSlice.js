import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/hooks/axiosInstance";

export const fetchLatestNews = createAsyncThunk(
  "latestNews/fetchLatestNews",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("v1/LatestNews");
      return response.data.data;
    } catch (error) {
      const errorMessage =
        error?.response?.data?.data || "Latest News not found!";
      return rejectWithValue(errorMessage);
    }
  }
);

const latestNewsSlice = createSlice({
  name: "latestNews",
  initialState: {
    latestNews: [],
    status: "idle", // idle | loading | fulfilled | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLatestNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLatestNews.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.latestNews = action.payload;
      })
      .addCase(fetchLatestNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default latestNewsSlice.reducer;
