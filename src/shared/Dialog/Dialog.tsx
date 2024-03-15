import React from "react";

import type { DialogPropTypes } from "./types";
import { dialogContext } from "./DialogContext";
import type { Subtract } from "utility-types";

export const WithDialog = <Props extends DialogPropTypes>(
	Component: React.ComponentType<Props>,
): React.ComponentType<Subtract<Props, DialogPropTypes>> => {
	return class C extends React.Component<Subtract<Props, DialogPropTypes>> {
		render() {
			return (
				<dialogContext.Consumer>
					{(context) => (
						<Component
							{...(this.props as Props)}
							openDialog={context.openDialog}
							closeDialog={context.closeDialog}
						/>
					)}
				</dialogContext.Consumer>
			);
		}
	};
};
