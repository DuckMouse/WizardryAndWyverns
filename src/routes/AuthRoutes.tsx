import { ForgotPassword, Register } from "../components/auth";
import { SignIn } from "../features/auth/pages/SignIn";
import type { TeamPickRoute } from "./models/custom-route.model";

export const authRoutes: TeamPickRoute[] = [
	{
		id: "route_signin",
		path: "/signin",
		name: "Sign in",
		element: <SignIn />,
		isMenu: false,
		isAuthenticated: false,
	},
	{
		id: "route_register",
		path: "/register",
		name: "Register",
		element: <Register />,
		isMenu: false,
		isAuthenticated: false,
	},
	{
		id: "route_passwordreset",
		path: "/passwordreset",
		name: "Forgot Password",
		element: <ForgotPassword />,
		isMenu: false,
		isAuthenticated: false,
	},
];
