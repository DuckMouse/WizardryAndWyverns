import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { appStore } from "./store";

const container: HTMLElement = document.getElementById("root")!;
const root = createRoot(container);

root.render(
	<Provider store={appStore}>
		<App />
	</Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
