import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Hotel } from "../types/Hotels";

interface DataProps {
  location: string;
  dateIn: string;
  dateOut: string;
}

export const fetchHotelsData = createAsyncThunk<Hotel, DataProps, ThunkConfig<string>>(
  "hotels/fetchHotelsData",
  async (data, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;
    const { location, dateIn, dateOut } = data;
    try {
      const response = await fetch(
        `https://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${dateIn}&checkOut=${dateOut}&limit=10`
      ).then((res) => res.json());

      if (!response) {
        throw new Error();
      }

      return response;
    } catch (e: any) {
      console.log(e);
      return rejectWithValue(e?.response?.data?.message || e?.message || "Something went wrong");
    }
  }
);
