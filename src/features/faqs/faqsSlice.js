import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/hooks/axiosInstance";

export const fetchFaqs = createAsyncThunk(
  "faqs/fetchFaqs",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("v1/faqs");
      return response.data;
    } catch (error) {
      const errorMessage = error?.response?.data?.message || "Faqs not found!";
      return rejectWithValue(errorMessage);
    }
  }
);

const faqsSlice = createSlice({
  name: "faqs",
  initialState: {
    faqs: [],
    status: "idle", // idle | loading | fulfilled | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFaqs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFaqs.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.faqs = action.payload;
      })
      .addCase(fetchFaqs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default faqsSlice.reducer;
