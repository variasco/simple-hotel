import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { User, userActions } from "entities/User";
import { LOCAL_STORAGE_USER_KEY } from "shared/const/localStorage";
import { ValidateLoginError } from "../types/LoginSchema";
import { validateProfileData } from "./validateLoginData";

interface loginByEmailProps {
  email: string;
  password: string;
}

export const loginByEmail = createAsyncThunk<
  User,
  loginByEmailProps,
  ThunkConfig<ValidateLoginError[]>
>("login/loginByEmail", async (loginData, thunkApi) => {
  const { dispatch, rejectWithValue } = thunkApi;
  const { email } = loginData;
  const errors = validateProfileData(loginData);

  if (errors.length) {
    return rejectWithValue(errors);
  }

  try {
    localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(loginData));
    dispatch(userActions.setAuthData({ email }));
    return loginData;
  } catch (e: any) {
    console.log(e);
    return rejectWithValue([ValidateLoginError.SERVER_ERROR]);
  }
});
