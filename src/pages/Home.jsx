import React from "react";
import AuthButton from "../shared/AuthButton/AuthButton"

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <h3>TEAMPICK LOGO</h3>
      <AuthButton to="/signIn" displayText="Log In" color="blue"></AuthButton>
      <AuthButton to="/register" displayText="Register" color="green"></AuthButton>
    </div>
  );
};

export default Home;
