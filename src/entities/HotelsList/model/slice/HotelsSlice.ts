import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchHotelsData } from "../services/fetchHotelsData";
import { Hotel, HotelSchema } from "../types/Hotels";
import { HotelsRequest } from "features/SearcHotels";

const initialState: HotelSchema = {
  search: {
    location: "Москва",
    date: new Date().toLocaleDateString().split(".").reverse().join("-"),
    days: "1",
  },
  hotels: [],
  isLoading: false,
  error: undefined,
};

export const HotelsSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<HotelsRequest>) => {
      state.search = { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHotelsData.pending, (state) => {
      state.isLoading = true;
      state.hotels = [];
    });
    builder.addCase(fetchHotelsData.fulfilled, (state, action: any) => {
      state.isLoading = false;
      state.hotels = action.payload;
    });
    builder.addCase(fetchHotelsData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: hotelsActions } = HotelsSlice;
export const { reducer: hotelsReducer } = HotelsSlice;
