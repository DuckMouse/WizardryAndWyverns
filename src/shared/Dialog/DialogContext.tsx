import type { DialogPropTypes, DialogWidthType } from "./types";
import { type Context, createContext } from "react";

export const dialogContext: Context<DialogPropTypes> = createContext({
	displayText: "",
	openDialog: (args: {
		component: React.ReactNode;
		title: string;
		okCallback: () => void;
		cancelCallback?: () => void;
		width?: DialogWidthType;
		okText?: string;
		cancelText?: string;
	}) => {
		console.log(args);
	},
	closeDialog: () => {},
});
