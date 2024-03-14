import { ClerkProvider } from "@clerk/clerk-react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
	throw new Error("Missing Publishable Key");
}

const container: HTMLElement = document.getElementById("root")!;
const root = createRoot(container);

root.render(
	<ClerkProvider publishableKey={PUBLISHABLE_KEY}>
		<App />
	</ClerkProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
