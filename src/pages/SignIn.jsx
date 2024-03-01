import React, { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInWithEmail = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Existing User Sign In</h2>

      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={signInWithEmail}>Sign In</button>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default SignIn;
