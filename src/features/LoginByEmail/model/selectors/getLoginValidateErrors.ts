import { StateSchema } from "app/providers/StoreProvider";

export const getLoginValidateErrors = (state: StateSchema) => state.login?.validateErrors;
