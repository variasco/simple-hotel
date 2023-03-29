import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { FavoriteSchema } from "features/FavoritesHotels/model/types/Favorites";
import { HotelSchema } from "entities/HotelsList/model/types/Hotels";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/LoginByEmail";
import { NavigateOptions, To } from "react-router-dom";

export interface StateSchema {
  user: UserSchema;
  login?: LoginSchema;
  hotels: HotelSchema;
  favorites: FavoriteSchema[];
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface StoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
