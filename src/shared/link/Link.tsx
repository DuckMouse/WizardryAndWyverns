import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Link, useLocation } from "react-router-dom";

export interface ILink {
	id: string;
	path: string;
	name: string;
	authOnly: boolean;
}

const sharedClass = "rounded-md px-3 py-2 text-sm font-medium";
const nonActiveClass = `${sharedClass} text-gray-300 hover:bg-gray-700 hover:text-white`;
const isCurrentClass = `${sharedClass} bg-gray-900 text-white`;

export const TPLink = ({ id, path, name, authOnly }: ILink) => {
	const location = useLocation();
	const isCurrent = location.pathname === path;
	const link = (
		<Link
			key={id}
			to={path}
			className={isCurrent ? isCurrentClass : nonActiveClass}
		>
			{name}
		</Link>
	);
	return authOnly ? <SignedIn>{link}</SignedIn> : <SignedOut>{link}</SignedOut>;
};
