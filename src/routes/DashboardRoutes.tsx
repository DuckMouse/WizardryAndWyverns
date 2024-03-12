import React from "react";
import { Dashboard } from "../components/dashboard/Dashboard";
import { Protected } from "./Protected";
import type { TeamPickRoute } from "./models/custom-route.model";

export const protectedRoutes: TeamPickRoute[] = [
	{
		id: "route_dashboard",
		path: "/dashboard",
		name: "Dashboard",
		element: (
			<Protected>
				<Dashboard />
			</Protected>
		),
		isMenu: true,
		isAuthenticated: true,
	},
];
