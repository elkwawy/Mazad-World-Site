import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/hooks/axiosInstance";

export const fetchCustomers = createAsyncThunk(
  "sellers/fetchCustomers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("v1/customers");
      return response.data.customers;
    } catch (error) {
      const errorMessage =
        error?.response?.data?.data || "Customers not found!";
      return rejectWithValue(errorMessage);
    }
  }
);

const customersSlice = createSlice({
  name: "customers",
  initialState: {
    customers: [],
    status: "idle", // idle | loading | fulfilled | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.customers = action.payload;
      })
      .addCase(fetchCustomers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default customersSlice.reducer;
