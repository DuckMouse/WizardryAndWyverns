import type { Action, ThunkDispatch } from "@reduxjs/toolkit";
import type { User } from "firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../features/auth";
import type { IBasicCredentials } from "../../features/auth/models";
import type { IAppState } from "../../store";

export const Dashboard = () => {
	const user = useSelector((store: IAppState) => store.auth.user);
	const dispatch =
		useDispatch<ThunkDispatch<User, IBasicCredentials, Action>>();

	const handleSignOut = async () => {
		try {
			dispatch(logOutUser());
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<h2>Dashboard Section For Logged In Users</h2>
			<p>Welcome, {user?.displayName ? user.displayName : user?.email}</p>
			<button type="button" onClick={handleSignOut}>
				Log Out
			</button>
		</div>
	);
};
