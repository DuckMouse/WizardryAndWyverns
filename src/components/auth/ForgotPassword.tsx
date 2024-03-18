import { type SyntheticEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../../features/auth";

export const ForgotPassword = () => {
	const emailRef = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();

	const handleSubmit = async (e: SyntheticEvent) => {
		e.preventDefault();
		const emailValue = emailRef.current?.value ?? "";
		try {
			await forgotPassword(emailValue);
			navigate("/signin");
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
