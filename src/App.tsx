import type React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { TopNavBar } from "./components/navigation/Navbar";
import { AuthProvider } from "./context/AuthContext";
import { RenderRoutes } from "./routes/AppRoutes";
import { DialogProvider } from "./shared";

export function App(): React.JSX.Element {
	return (
		<DialogProvider>
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
		</DialogProvider>
	);
}
