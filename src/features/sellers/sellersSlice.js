import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/hooks/axiosInstance";

export const fetchSellers = createAsyncThunk(
  "sellers/fetchSellers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("v1/featured-sellers");
      return response.data.data;
    } catch (error) {
      const errorMessage =
        error?.response?.data?.data || "Sellers not found!";
      return rejectWithValue(errorMessage);
    }
  }
);

const sellersSlice = createSlice({
  name: "sellers",
  initialState: {
    sellers: [],
    status: "idle", // idle | loading | fulfilled | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSellers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSellers.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.sellers = action.payload;
      })
      .addCase(fetchSellers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default sellersSlice.reducer;
