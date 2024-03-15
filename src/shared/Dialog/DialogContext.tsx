import { createContext, type Context } from "react";
import type { DialogPropTypes, DialogWidthType } from "./types";

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
