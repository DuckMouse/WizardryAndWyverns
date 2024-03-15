import { Dialog } from "@headlessui/react";
import React from "react";
import { dialogContext } from "./DialogContext";
import type {
	DialogPropTypes,
	DialogWidthType,
	EmptyFunctionType,
	OpenDialogType,
} from "./types";

interface StateTypes {
	value: DialogPropTypes;
	isOpen: boolean;
	title: string;
	okText?: string;
	cancelText?: string;
	width?: DialogWidthType;
	component: React.ReactNode;
	okCallback: EmptyFunctionType;
	cancelCallback?: EmptyFunctionType;
	hideOk?: boolean;
	hideCancel?: boolean;
}

interface PropTypes {
	children: React.ReactNode;
}

export class DialogProvider extends React.Component<PropTypes, StateTypes> {
	constructor(props: PropTypes) {
		super(props);
		this.state = {
			isOpen: false,
			title: "",
			okText: "Ok",
			cancelText: "Cancel",
			width: "md",
			component: null,
			hideCancel: false,
			hideOk: false,
			okCallback: () => {
				console.log("Not implemented!");
			},
			cancelCallback: () => {
				console.log("Not implemented!");
			},
			value: {
				displayText: "Dialog",
				openDialog: this.open,
				closeDialog: this.close,
			},
		};
	}

	public open: OpenDialogType = ({
		component,
		title,
		okCallback,
		cancelCallback,
		width,
		okText,
		cancelText,
		hideCancel,
		hideOk,
	}) => {
		this.setState({
			component,
			title,
			okCallback,
			cancelCallback,
			width,
			okText,
			cancelText,
			isOpen: true,
			hideCancel,
			hideOk,
		});
	};

	public close = (): void => {
		this.setState({ isOpen: false });
	};

	public handleCloseClick = () => {
		if (this.state.cancelCallback) {
			this.state.cancelCallback();
		} else {
			this.close();
		}
	};

	render() {
		const {
			value,
			isOpen,
			width,
			title,
			okText,
			cancelText,
			component,
			hideCancel,
			hideOk,
		} = this.state;

		return (
			<dialogContext.Provider value={value}>
				<Dialog
					open={isOpen}
					onClose={this.handleCloseClick}
					className="relative z-50"
				>
					<div className="fixed inset-0 bg-black/30" aria-hidden="true" />
					<div className="fixed inset-0 flex w-screen items-center justify-center">
						<Dialog.Panel className="w-full max-w-sm rounded bg-white p-4">
							<Dialog.Title>{title}</Dialog.Title>
							{component}
							<div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
								{hideCancel ? null : (
									<button
										className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm"
										type="button"
										onClick={this.handleCloseClick}
										color="secondary"
									>
										{cancelText}
									</button>
								)}

								{hideOk ? null : (
									<button
										className=" inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
										type="button"
										onClick={this.state.okCallback}
										color="primary"
									>
										{okText}
									</button>
								)}
							</div>
						</Dialog.Panel>
					</div>
				</Dialog>
				{this.props.children}
			</dialogContext.Provider>
		);
	}
}
