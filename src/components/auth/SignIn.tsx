import { type SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { type DialogPropTypes, WithDialog } from "../../shared";

export const Login = (props: DialogPropTypes) => {
	const { signInUser, user } = UserAuth();
	const navigate = useNavigate();

	const handleDialogOkClick = () => {
		alert("Dialog Ok button clicked!");
	};
	const handleDialogCancellClick = () => {
		props.closeDialog();
	};

	const handleSignIn = async (email: string, password: string) => {
		try {
			await signInUser(email, password);
			props.closeDialog();
			return navigate("/dashboard");
		} catch (err) {
			console.error(err);
		}
	};

	const handleButtonClick = () => {
		const component = <SignIn handleSignIn={handleSignIn} />;
		props.openDialog({
			component,
			title: "Login",
			okCallback: handleDialogOkClick,
			cancelCallback: handleDialogCancellClick,
			width: "md",
			okText: "OK",
			cancelText: "Cancel",
			hideCancel: true,
			hideOk: true,
		});
	};

	return (
		<button
			type="button"
			className="block px-4 py-2 text-sm text-gray-700"
			onClick={handleButtonClick}
		>
			Sign In
		</button>
	);
};

export const LoginDialog = WithDialog(Login);

export interface ISignIn {
	handleSignIn: (email: string, password: string) => Promise<void>;
}

export const SignIn = ({ handleSignIn }: ISignIn) => {
	const { googleSignIn, signInUser, user } = UserAuth();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignInWithEmail = async (e: SyntheticEvent) => {
		e.preventDefault();
		handleSignIn(email, password);
	};

	return (
		<div>
			<form onSubmit={handleSignInWithEmail}>
				<div>
					<label
						htmlFor="email"
						className="block text-sm font-medium leading-6 text-gray-900"
					>
						Email address
					</label>
					<div className="mt-2">
						<input
							onChange={(e) => setEmail(e.target.value)}
							id="email"
							name="email"
							type="email"
							autoComplete="email"
							required
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>
				<div>
					<label
						htmlFor="password"
						className="block text-sm font-medium leading-6 text-gray-900 mt-4"
					>
						Password
					</label>
					<div className="mt-2">
						<input
							id="password"
							name="password"
							type="password"
							autoComplete="current-password"
							required
							onChange={(e) => setPassword(e.target.value)}
							className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
				</div>
				<div className="mt-4">
					<button
						type="submit"
						className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Sign in
					</button>
					<div className="flex w-full justify-center py-2.5">Or</div>
					<div className="flex w-full justify-center">
						<button
							className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
							type="button"
							onClick={googleSignIn}
						>
							Sign In With Google
						</button>
					</div>
				</div>
			</form>
			<div>{/* <Link to="/passwordreset">Forgot Password?</Link> */}</div>
		</div>
	);
};
