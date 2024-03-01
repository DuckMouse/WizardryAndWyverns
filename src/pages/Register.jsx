import React, { useState } from 'react'; 
import { auth, googleProvider } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const Register = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const registerWithEmail = async () => {
    try {
    await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err)
    }
};

const signUpWithGoogle = async () => {
    try {
    await signInWithPopup(auth, googleProvider);
    } catch (err) {
        console.error(err)
    }
};

const logout = async () => {
    try {
    await signOut(auth);
    } catch (err) {
        console.error(err)
    }
};

    return (
        <div>
            <h2>Registration Page</h2>

            <input placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}/>
            
            <input placeholder='Password'
            type='password'
            onChange={(e) => setPassword(e.target.value)}/>
            
            <button onClick={registerWithEmail}>Sign Up</button>
            <button onClick={signUpWithGoogle}>Sign Up With Google</button>
            <button onClick={logout}>Log Out</button>
        </div>
    );
}

export default Register;