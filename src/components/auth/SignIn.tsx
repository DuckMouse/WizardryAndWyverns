import React, { type SyntheticEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

export const SignIn = () => {
	const { googleSignIn, signInUser, user } = UserAuth();
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignInWithEmail = async (e: SyntheticEvent) => {
		e.preventDefault();
		try {
			await signInUser(email, password);
			return navigate("/dashboard");
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
				<button type="button" onClick={googleSignIn}>Sign In With Google</button>
			</div>
			<div>
				<Link to="/passwordreset">Forgot Password?</Link>
			</div>
		</div>
	);
};
