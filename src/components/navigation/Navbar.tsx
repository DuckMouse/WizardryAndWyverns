import { Disclosure, Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import teampicklogo from "../..//assets/images/teampick_logo.png";
import { UserAuth } from "../../context/AuthContext";
import { routes } from "../../routes/AppRoutes";
import { TPLink } from "../../shared";
import { LoginDialog } from "../auth";

export const TopNavBar = () => {
	const { user, logOut } = UserAuth();
	const handleSignOut = logOut;

	function classNames(...classes: string[]) {
		return classes.filter(Boolean).join(" ");
	}

	return (
		<Disclosure as="nav" className="bg-gray-800">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="flex h-16 items-center justify-between">
							<div className="flex items-center">
								<div className="flex-shrink-0">
									<img
										className="h-8 w-auto"
										alt="Team Pick Logo"
										src={teampicklogo}
									/>
								</div>
								<div className="hidden sm:ml-6 sm:block">
									<div className="flex space-x-4">
										{routes.map((r, i) => {
											if (!r.isAuthenticated && r.isMenu) {
												return (
													<TPLink
														key={r.id}
														id={r.id}
														path={r.path}
														name={r.name}
													/>
												);
											}
											if (!user?.isAnonymous && user && r.isMenu) {
												return (
													<TPLink
														key={r.id}
														id={r.id}
														path={r.path}
														name={r.name}
													/>
												);
											}
										})}
									</div>
								</div>
							</div>
							<div className="hidden sm:ml-6 sm:block">
								<div className="flex items-center">
									{/* Profile dropdown */}
									<Menu as="div" className="relative ml-3">
										<div>
											<Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
												<span className="absolute -inset-1.5" />
												<span className="sr-only">Open user menu</span>
												<img
													className="h-8 w-8 rounded-full"
													src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1935&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
													alt=""
												/>
											</Menu.Button>
										</div>
										<Transition
											as={Fragment}
											enter="transition ease-out duration-100"
											enterFrom="transform opacity-0 scale-95"
											enterTo="transform opacity-100 scale-100"
											leave="transition ease-in duration-75"
											leaveFrom="transform opacity-100 scale-100"
											leaveTo="transform opacity-0 scale-95"
										>
											<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
												{user && !user?.isAnonymous ? (
													<Menu.Item>
														{({ active }) => (
															<button
																type="button"
																className={classNames(
																	active ? "bg-gray-100" : "",
																	"block px-4 py-2 text-sm text-gray-700",
																)}
																onClick={handleSignOut}
															>
																Sign out
															</button>
														)}
													</Menu.Item>
												) : (
													<Menu.Item>
														{({ active }) => <LoginDialog />}
													</Menu.Item>
												)}
											</Menu.Items>
										</Transition>
									</Menu>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</Disclosure>
	);
};
