import { Route, Routes } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { authRoutes } from "./AuthRoutes";
import { pageRoutes } from "./StaticRoutes";
import { protectedRoutes } from "./DashboardRoutes";

export const RenderRoutes = () => {
    const { user } = UserAuth();

    return (
        <Routes>
            {routes.map((r, i) => {
                if (r.isAuthenticated && !user.isAnonymous) {
                    return <Route key={i} path={r.path} element={r.element} />
                } else if (!r.isAuthenticated) {
                    return <Route key={i} path={r.path} element={r.element} />
                } else return false
            })}
        </Routes>
    )

}


export const routes = [
    ...pageRoutes,
    ...protectedRoutes,
    ...authRoutes
]