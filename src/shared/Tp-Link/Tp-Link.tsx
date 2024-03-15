import { Link, useLocation } from "react-router-dom";

export interface ILink {
	id: string;
	path: string;
	name: string;
}

const sharedClass = "rounded-md px-3 py-2 text-sm font-medium";
const nonCurrentClass = `${sharedClass} text-gray-300 hover:bg-gray-700 hover:text-white`;
const isCurrentClass = `${sharedClass} bg-gray-900 text-white`;

export const TPLink = ({ id, path, name }: ILink) => {
	const location = useLocation();
	const isCurrent = location.pathname === path;
	return (
		<Link
			key={id}
			to={path}
			className={isCurrent ? isCurrentClass : nonCurrentClass}
		>
			{name}
		</Link>
	);
};
