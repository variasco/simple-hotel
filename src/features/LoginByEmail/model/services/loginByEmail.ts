import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { User, userActions } from "entities/User";
import { LOCAL_STORAGE_USER_KEY } from "shared/const/localStorage";

interface loginByEmailProps {
  email: string;
  password: string;
}

export const loginByEmail = createAsyncThunk<User, loginByEmailProps, ThunkConfig<string>>(
  "login/loginByEmail",
  async (authData, thunkApi) => {
    const { dispatch, rejectWithValue } = thunkApi;
    try {
      const { email } = authData;
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(authData));
      dispatch(userActions.setAuthData({ email }));
      return authData;
      
    } catch (e: any) {
      console.log(e);
      return rejectWithValue(e?.response?.data?.message || e.message || "smth wnt wrng");
    }
  }
);
