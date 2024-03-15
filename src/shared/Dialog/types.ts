export type DialogWidthType = "xl" | "lg" | "md" | "sm";

export type OpenDialogType = (args: {
	component: React.ReactNode;
	title: string;
	okCallback: () => void;
	cancelCallback?: () => void;
	width?: DialogWidthType;
	okText?: string;
	cancelText?: string;
	hideOk?: boolean;
	hideCancel?: boolean;
}) => void;

export interface DialogPropTypes {
	openDialog: OpenDialogType;
	closeDialog: EmptyFunctionType;
	displayText: string;
}

export type EmptyFunctionType = () => void;
