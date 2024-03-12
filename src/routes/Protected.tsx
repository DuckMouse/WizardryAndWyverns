import type React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

export interface ProtectedProps {
	children: React.JSX.Element;
}

export const Protected = ({ children }: ProtectedProps) => {
	const { user } = UserAuth();
	if (!user) {
		return <Navigate to="/" replace />;
	}
	return children;
};
