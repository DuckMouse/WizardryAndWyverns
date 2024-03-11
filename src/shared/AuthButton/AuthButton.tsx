import type React from "react";
import { Link } from "react-router-dom";
import "./AuthButton.css";

export interface IAuthProperties {
	to: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	children?: React.JSX.Element;
	displayText?: string;
	color?: string;
}

export const AuthButton = ({
	to,
	onClick,
	children,
	displayText,
	color,
}: IAuthProperties) => {
	const buttonClassName = `auth-button ${color}-button`;

	return (
		<Link to={to}>
			<button type="button" className={buttonClassName} onClick={onClick}>
				{displayText}
				{children}
			</button>
		</Link>
	);
};
