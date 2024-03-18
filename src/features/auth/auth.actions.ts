import {
	GoogleAuthProvider,
	type UserCredential,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signInWithRedirect,
	signOut,
} from "firebase/auth";
import { auth } from "../../config/firebase";

export const createUser = async (
	email: string,
	password: string,
): Promise<UserCredential> => {
	try {
		return await createUserWithEmailAndPassword(auth, email, password);
	} catch (error) {
		console.warn(error);
		return new Promise((resolve) => {
			return resolve(<UserCredential>{});
		});
	}
};

export const loginUser = async (
	email: string,
	password: string,
): Promise<UserCredential> => {
	try {
		return await signInWithEmailAndPassword(auth, email, password);
	} catch (error) {
		console.warn(error);
		return new Promise((resolve) => {
			return resolve(<UserCredential>{});
		});
	}
};

export const forgotPassword = async (email: string): Promise<void> => {
	try {
		return sendPasswordResetEmail(auth, email);
	} catch (error) {
		console.warn(error);
	}
};

export const logOutUser = async (): Promise<void> => {
	try {
		return signOut(auth);
	} catch (error) {
		console.warn(error);
	}
};

export const googleSignIn = async (): Promise<never> => {
	const provider = new GoogleAuthProvider();
	return signInWithRedirect(auth, provider);
};
