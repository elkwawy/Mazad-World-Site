import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/hooks/axiosInstance";
import { showToast } from "@/utils/showToast";

// جلب جميع المزادات
export const fetchAuctions = createAsyncThunk(
  "auctions/fetchAuctions",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("v1/auctions/show");
      return response.data.auctions;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "Auctions not found!"
      );
    }
  }
);

// جلب مزاد معين
export const showSingleAuction = createAsyncThunk(
  "auctions/showSingleAuction",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `v1/auctions/showSingleAuction/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "Auction not found!"
      );
    }
  }
);

// إرسال المزايدة
export const auctionNow = createAsyncThunk(
  "auctions/auctionNow",
  async ({ id, bid_amount }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        `v1/auctions/Bidding/${id}/place-bid`,
        { bid_amount }
      );
      return response.data.auction;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.response?.data?.error ||
          "Failed to place bid!"
      );
    }
  }
);

const auctionsSlice = createSlice({
  name: "auctions",
  initialState: {
    auctions: [],
    status: "idle", // idle | loading | fulfilled | failed
    error: null,
    singleAuction: null,
    singleStatus: "idle",
    singleError: null,
    bidStatus: "idle",
    bidError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // جميع المزادات
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
      })

      // مزاد واحد
      .addCase(showSingleAuction.pending, (state) => {
        state.singleStatus = "loading";
      })
      .addCase(showSingleAuction.fulfilled, (state, action) => {
        state.singleStatus = "fulfilled";
        state.singleAuction = action.payload;
      })
      .addCase(showSingleAuction.rejected, (state, action) => {
        state.singleStatus = "failed";
        state.singleError = action.payload;
      })

      // المزايدة
      .addCase(auctionNow.pending, (state) => {
        state.bidStatus = "loading";
      })
      .addCase(auctionNow.fulfilled, (state, action) => {
        state.bidStatus = "fulfilled";
        showToast("success", "Bid placed successfully!");
        state.singleAuction = action.payload;
      })
      .addCase(auctionNow.rejected, (state, action) => {
        state.bidStatus = "failed";
        state.bidError = action.payload;
        console.log(action.payload);

        showToast("error", action.payload);
      });
  },
});

export default auctionsSlice.reducer;
