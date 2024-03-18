import type React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import type { IAppState } from "../store";

export interface ProtectedProps {
	children: React.JSX.Element;
}

export const Protected = ({ children }: ProtectedProps) => {
	const user = useSelector((store: IAppState) => store.auth.user);

	if (!user) {
		return <Navigate to="/" replace />;
	}
	return children;
};
