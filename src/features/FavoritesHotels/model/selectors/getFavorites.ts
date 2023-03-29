import { StateSchema } from "app/providers/StoreProvider";

export const getFavorites = (state: StateSchema) => state.favorites;
