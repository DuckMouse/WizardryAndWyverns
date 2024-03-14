import type { ReactElement } from "react";

export interface TeamPickRoute {
	id: string;
	path: string;
	name: string;
	element: ReactElement;
	isMenu: boolean;
	isAuthenticated: boolean;
	isCurrent?: boolean;
}

// id: "route_passwordreset",
// 		path: "/passwordreset",
// 		name: "Forgot Password",
// 		element: <ForgotPassword />,
// 		isMenu: false,
// 		isAuthenticated: false,
