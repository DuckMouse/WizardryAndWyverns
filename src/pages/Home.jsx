import React from "react";
import LoginButton from "../shared/signinButton/SinginButton";
import RegisterButton from "../shared/registerButton/RegisterButton";

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <h3>TEAMPICK LOGO</h3>
      <LoginButton to="/signin" />
      <RegisterButton to="/register" />
    </div>
  );
};

export default Home;
