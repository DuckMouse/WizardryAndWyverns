import type React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { TopNavBar } from "./components/navigation/Navbar";
import { AuthProvider } from "./context/AuthContext";
import { RenderRoutes } from "./routes/AppRoutes";

export function App(): React.JSX.Element {
	return (
		<AuthProvider>
			<Router>
				<div>
					<nav>
						<TopNavBar />
					</nav>
					<div>{<RenderRoutes />}</div>
				</div>
			</Router>
		</AuthProvider>
	);
}
