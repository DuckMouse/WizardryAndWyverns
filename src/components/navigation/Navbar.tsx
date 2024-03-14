import { Disclosure, Menu, Transition } from "@headlessui/react";
import React, { Fragment, useEffect } from "react";
import teampicklogo from "../..//assets/images/teampick_logo.png";
import { UserAuth } from "../../context/AuthContext";
import { routes } from "../../routes/AppRoutes";
import {
	SignInButton,
	SignedIn,
	SignedOut,
	UserButton,
} from "@clerk/clerk-react";
import { TPLink } from "../../shared";

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
										{routes
											.filter((r) => r.isMenu)
											.map((r, i) => (
												<TPLink
													key={r.id}
													id={r.id}
													path={r.path}
													name={r.name}
													authOnly={r.isAuthenticated}
												/>
											))}
									</div>
								</div>
							</div>
							<div className="hidden sm:ml-6 sm:block">
								<div className="flex items-center">
									{/* Profile dropdown */}
									<Menu as="div" className="relative ml-3">
										<div>
											<UserButton afterSignOutUrl="/" />
											<SignInButton afterSignInUrl="/dashboard" mode="modal">
												<SignedOut>
													<div className="relative flex text-white">Login</div>
												</SignedOut>
											</SignInButton>
											{/* <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
												<span className="absolute -inset-1.5" />
												<span className="sr-only">Open user menu</span>
												<img
													className="h-8 w-8 rounded-full"
													src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1935&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
													alt=""
												/>
											</Menu.Button> */}
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
												<SignedIn>
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
												</SignedIn>

												<SignedOut>
													<Menu.Item>
														{({ active }) => (
															<a
																href="/signin"
																className={classNames(
																	active ? "bg-gray-100" : "",
																	"block px-4 py-2 text-sm text-gray-700",
																)}
															>
																Sign In
															</a>
														)}
													</Menu.Item>
												</SignedOut>
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
