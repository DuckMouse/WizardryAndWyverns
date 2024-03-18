import { Route, Routes } from "react-router-dom";
import { authRoutes } from "./AuthRoutes";
import { protectedRoutes } from "./DashboardRoutes";
import { pageRoutes } from "./StaticRoutes";
import { useSelector } from "react-redux";
import type { IAppState } from "../store";

export const RenderRoutes = () => {
	const user = useSelector((store: IAppState) => store.auth.user);

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
