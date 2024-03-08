import { useContext, createContext, useEffect, useState, } from "react";
import { auth } from "../config/firebase";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { LayoutRouteProps } from "react-router-dom";
import { IAuthContext } from "./AuthContext.model";

const defaultState: IAuthContext = {
  user: null,
  createUser: (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  },
  signInUser: (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  },
  googleSignIn: () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  },
  forgotPassword: (email: string) => {
    return sendPasswordResetEmail(auth, email);
  },
  logOut: () => {
    signOut(auth);
  }
}

export const AuthContext = createContext<IAuthContext>(defaultState);

export const AuthProvider = (props: LayoutRouteProps) => {

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const state: IAuthContext = {
    ...defaultState,
    user
  }

  return (
    <AuthContext.Provider
      value={state}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
