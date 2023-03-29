import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavoriteSchema } from "../types/Favorites";

const initialState: FavoriteSchema[] = [];

export const FavoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<FavoriteSchema>) => {
      state.push(action.payload);
    },
    removeFromFavorites: (state, action: PayloadAction<FavoriteSchema["hotelId"]>) => {
      return state = state.filter((item) => item["hotelId"] !== action.payload);
    },
  },
});

export const { actions: favoritesActions } = FavoritesSlice;
export const { reducer: favoritesReducer } = FavoritesSlice;
