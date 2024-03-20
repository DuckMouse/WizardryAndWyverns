import type { Action, ThunkDispatch } from "@reduxjs/toolkit";
import type { User } from "firebase/auth";
import { type SyntheticEvent, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../../features/auth";
import type { IBasicCredentials } from "../../features/auth/models";

export const ForgotPassword = () => {
	const emailRef = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();
	const dispatch =
		useDispatch<ThunkDispatch<User, IBasicCredentials, Action>>();

	const handleSubmit = async (e: SyntheticEvent) => {
		e.preventDefault();
		const emailValue = emailRef.current?.value ?? "";
		try {
			dispatch(forgotPassword(emailValue)).then(() => {
				navigate("/signin");
			});
		} catch (error: unknown) {
			if (error instanceof Error) {
				console.log("Error sending password reset email:", error.message);
			}
		}
	};

	return (
		<div>
			<h2>Forgot Password</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Email Address</label>
					<input ref={emailRef} type="email" required />
				</div>
				<button type="submit">Reset Password</button>
			</form>
		</div>
	);
};
