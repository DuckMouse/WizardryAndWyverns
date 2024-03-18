import { createSlice } from "@reduxjs/toolkit";
import type { User } from "firebase/auth";

export interface IAuthSlice {
	user: User | null;
	isLoggedIn: boolean;
}

export const authSlice = createSlice({
	name: "auth",
	initialState: <IAuthSlice>{
		user: null,
		isLoggedIn: false,
	},
	reducers: {
		setLoggedIn: (state, action) => {
			state.isLoggedIn = action.payload;
		},
		setUser: (state, action) => {
			state.user = action.payload;
		},
	},
});

export const { setLoggedIn, setUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
