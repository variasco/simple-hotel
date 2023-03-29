import { StateSchema } from "app/providers/StoreProvider";

export const getLoginError = (state: StateSchema) => state?.login?.error;
export const getLoginLoading = (state: StateSchema) => state?.login?.isLoading || false;
export const getLoginEmail = (state: StateSchema) => state?.login?.email || "";
export const getLoginPassword = (state: StateSchema) => state?.login?.password || "";

export const getLoginState = (state: StateSchema) => state?.login;
