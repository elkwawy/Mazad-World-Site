import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/hooks/axiosInstance";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("v1/category/show");
      return response.data.categories;
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Category not found!";
      return rejectWithValue(errorMessage);
    }
  }
);

export const fetchProductsCategory = createAsyncThunk(
  "categories/fetchProductsCategory",
  async (categoryId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `v1/auctions/show?categoryId=${categoryId}`
      );
      return response.data.auctions;
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Products Category not found!";
      return rejectWithValue(errorMessage);
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    productsCategory: [],
    statusPC: "idle", // idle | loading | fulfilled | failed
    status: "idle", // idle | loading | fulfilled | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchProductsCategory.pending, (state) => {
        state.statusPC = "loading";
      })
      .addCase(fetchProductsCategory.fulfilled, (state, action) => {
        state.statusPC = "fulfilled";
        state.productsCategory = action.payload;
      })
      .addCase(fetchProductsCategory.rejected, (state, action) => {
        state.statusPC = "failed";
        state.error = action.payload;
      });
  },
});

export default categoriesSlice.reducer;
