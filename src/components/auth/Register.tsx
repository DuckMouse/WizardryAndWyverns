import type { Action, ThunkDispatch } from "@reduxjs/toolkit";
import type { User } from "firebase/auth";
import { type SyntheticEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createUser, googleSignIn } from "../../features/auth";
import type { IBasicCredentials } from "../../features/auth/models";
import type { IAppState } from "../../store";

export const Register = () => {
	const user = useSelector((store: IAppState) => store.auth.user);
	const navigate = useNavigate();
	const dispatch =
		useDispatch<ThunkDispatch<User, IBasicCredentials, Action>>();

	if (user) navigate("./dashboard");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e: SyntheticEvent) => {
		e.preventDefault();
		setError("");
		try {
			dispatch(createUser({ email, password })).then(() => {
				navigate("/dashboard");
			});
		} catch (e: unknown) {
			if (e instanceof Error) {
				setError(e.message);
			}
		}
	};

	return (
		<div>
			<h2>Registration Page</h2>
			<p>
				Already have an account? <Link to="/signin">Sign In</Link>
			</p>

			<form onSubmit={handleSubmit}>
				<div>
					<label>Email Address</label>
					<input
						onChange={(e) => setEmail(e.target.value)}
						type="email"
						required
					/>
				</div>
				<div>
					<label>Password</label>
					<input
						placeholder="Password"
						type="password"
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<button type="submit">Sign Up</button>
			</form>

			<button type="button" onClick={googleSignIn}>
				Sign Up With Google
			</button>

			{error && <p>{error}</p>}
		</div>
	);
};
