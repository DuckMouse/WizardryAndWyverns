import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./features/auth";

export const appStore = configureStore({
	reducer: {
		auth: authReducer,
	},
});
export type IAppState = ReturnType<typeof appStore.getState>;
