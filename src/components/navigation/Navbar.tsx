import React from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { routes } from "../../routes/AppRoutes";
import teampicklogo from "../..//assets/images/teampick_logo.png";

export const TopNavBar = () => {
  const { user, logOut } = UserAuth();
  const handleSignOut = logOut;

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img className="h-8 w-auto" src={teampicklogo} />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {routes.map((r, i) => {
                      if (!r.isAuthenticated && r.isMenu) {
                        return (
                          <Link
                            key={i}
                            to={r.path}
                            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                          >
                            {r.name}
                          </Link>
                        );
                      } else if (!user?.isAnonymous && user && r.isMenu) {
                        return (
                          <Link
                            key={i}
                            to={r.path}
                            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                          >
                            {r.name}
                          </Link>
                        );
                      } else return null;
                    })}
                    {user && !user?.isAnonymous ? (
                      <li className="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                        <Link to={"#"} onClick={handleSignOut}>
                          Log out
                        </Link>
                      </li>
                    ) : (
                      <li className="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                        <Link to={"signin"}>Sign In</Link>
                      </li>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );

}