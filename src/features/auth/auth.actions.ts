import { createAsyncThunk } from "@reduxjs/toolkit";
import {
	GoogleAuthProvider,
	type User,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signInWithRedirect,
	signOut,
} from "firebase/auth";
import { auth } from "../../config/firebase";
import type { IBasicCredentials } from "./models";

export enum AuthActions {
	createUser = "auth/register",
	loginUser = "auth/login",
	forgotPassword = "auth/forgotPassword",
	logOutUser = "auth/logoutPassword",
	googleSignIn = "auth/googleSignIn",
}

export const createUser = createAsyncThunk(
	AuthActions.createUser,
	async ({ email, password }: IBasicCredentials, { rejectWithValue }) => {
		try {
			return await createUserWithEmailAndPassword(auth, email, password).then(
				(result) => <User>result.user.toJSON(),
			);
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

export const loginUser = createAsyncThunk(
	AuthActions.loginUser,
	async ({ email, password }: IBasicCredentials, { rejectWithValue }) => {
		try {
			return await signInWithEmailAndPassword(auth, email, password).then(
				(result) => <User>result.user.toJSON(),
			);
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

export const forgotPassword = createAsyncThunk(
	AuthActions.forgotPassword,
	async (email: string, { rejectWithValue }) => {
		try {
			await sendPasswordResetEmail(auth, email);
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

export const logOutUser = createAsyncThunk(
	AuthActions.logOutUser,
	async (_, { rejectWithValue }) => {
		try {
			return signOut(auth);
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

export const googleSignIn = createAsyncThunk(
	AuthActions.googleSignIn,
	async (_, { rejectWithValue }) => {
		try {
			const provider = new GoogleAuthProvider();
			return signInWithRedirect(auth, provider);
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);
