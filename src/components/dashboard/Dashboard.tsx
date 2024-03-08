import React from "react";
import { UserAuth } from "../../context/AuthContext";

export const Dashboard = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Dashboard Section For Logged In Users</h2>
      <p>Welcome, {user.displayName ? user.displayName : user.email}</p>
      <button onClick={handleSignOut}>Log Out</button>
    </div>
  );
};


