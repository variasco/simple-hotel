import { StateSchema } from "app/providers/StoreProvider";

export const getHotelsData = (state: StateSchema) => state?.hotels?.hotels;
export const getSearchData = (state: StateSchema) =>
  state?.hotels?.search || {
    date: new Date().toLocaleDateString().split(".").reverse().join("-"),
    location: "Москва",
    days: "1",
  };
