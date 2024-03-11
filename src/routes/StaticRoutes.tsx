import { About, Contact, Home } from "../pages";
import type { TeamPickRoute } from "./models/custom-route.model";

export const pageRoutes: TeamPickRoute[] = [
	{
		id: "route_home",
		path: "/",
		name: "Home",
		element: <Home />,
		isMenu: true,
		isAuthenticated: false,
	},
	{
		id: "route_about",
		path: "/about",
		name: "About",
		element: <About />,
		isMenu: true,
		isAuthenticated: false,
	},
	{
		id: "route_contact",
		path: "/contact",
		name: "Contact",
		element: <Contact />,
		isMenu: true,
		isAuthenticated: false,
	},
];
