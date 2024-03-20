import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { User } from "firebase/auth";
import {
	AuthActions,
	createUser,
	forgotPassword,
	logOutUser,
	loginUser,
} from "./auth.actions";

export interface IAuthSlice {
	user: User | null;
	isLoggedIn: boolean;
	isLoading: boolean;
}

export const authSlice = createSlice({
	name: "auth",
	initialState: <IAuthSlice>{
		user: null,
		isLoggedIn: false,
		isLoading: false,
	},
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(loginUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.user = action.payload;
				state.isLoading = false;
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.isLoading = false;
				console.warn(action.error);
			})
			.addCase(createUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createUser.fulfilled, (state, action) => {
				state.user = action.payload;
				state.isLoading = false;
			})
			.addCase(createUser.rejected, (state, action) => {
				state.isLoading = false;
				console.warn(action.error);
			})
			.addCase(forgotPassword.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(forgotPassword.fulfilled, (state, action) => {
				state.isLoading = false;
			})
			.addCase(forgotPassword.rejected, (state, action) => {
				state.isLoading = false;
				console.warn(action.error);
			})
			.addCase(logOutUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(logOutUser.fulfilled, (state, action) => {
				state.user = null;
				state.isLoading = false;
			})
			.addCase(logOutUser.rejected, (state, action) => {
				state.isLoading = false;
				console.warn(action.error);
			});
	},
});

export const authReducer = authSlice.reducer;
