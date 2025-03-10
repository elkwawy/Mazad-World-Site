import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/hooks/axiosInstance";

export const fetchAuctions = createAsyncThunk(
  "products/fetchAuctions",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("v1/auctions/show");
      return response.data.auctions;
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Auctions not found!";
      return rejectWithValue(errorMessage);
    }
  }
);

const auctionsSlice = createSlice({
  name: "auctions",
  initialState: {
    auctions: [],
    status: "idle", // idle | loading | fulfilled | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuctions.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAuctions.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.auctions = action.payload;
      })
      .addCase(fetchAuctions.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default auctionsSlice.reducer;
