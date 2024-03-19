import type { Action, ThunkDispatch } from "@reduxjs/toolkit";
import type { User } from "firebase/auth";
import { type SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { googleSignIn, loginUser } from "../../features/auth";
import type { IBasicCredentials } from "../../features/auth/models";

export const SignIn = () => {
	const navigate = useNavigate();
	const dispatch =
		useDispatch<ThunkDispatch<User, IBasicCredentials, Action>>();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignInWithEmail = async (e: SyntheticEvent) => {
		e.preventDefault();
		try {
			dispatch(loginUser({ email, password })).then(() => {
				navigate("/dashboard");
			});
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div>
			<h2>Existing User Sign In</h2>
			<p>
				Don't have an account yet? <Link to="/register">Register</Link>
			</p>

			<form onSubmit={handleSignInWithEmail}>
				<div>
					<label>Email Address</label>
					<input onChange={(e) => setEmail(e.target.value)} type="email" />
				</div>
				<div>
					<label>Password</label>
					<input
						placeholder="Password"
						type="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type="submit">Sign In</button>
			</form>
			<div>
				<button type="button" onClick={googleSignIn}>
					Sign In With Google
				</button>
			</div>
			<div>
				<Link to="/passwordreset">Forgot Password?</Link>
			</div>
		</div>
	);
};
