import { Route, Routes } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { authRoutes } from "./AuthRoutes";
import { protectedRoutes } from "./DashboardRoutes";
import { pageRoutes } from "./StaticRoutes";

export const RenderRoutes = () => {
	const { user } = UserAuth();

	return (
		<Routes>
			{routes.map((r, i) => {
				if (r.isAuthenticated && !user?.isAnonymous) {
					return <Route key={r.id} path={r.path} element={r.element} />;
				}
				if (!r.isAuthenticated) {
					return <Route key={r.id} path={r.path} element={r.element} />;
				}
			})}
		</Routes>
	);
};

export const routes = [...pageRoutes, ...protectedRoutes, ...authRoutes];
