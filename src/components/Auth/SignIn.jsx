import React, { useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";

const SignIn = () => {
  const { googleSignIn, signInUser, user } = UserAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignInWithEmail = async (e) => {
    e.preventDefault();
    try {
      await signInUser(email, password);
      redirectToDashboard();
    } catch (err) {
      console.error(err);
    }
  };

  const redirectToDashboard = () => {
    navigate("/dashboard");
  };

  useEffect(() => {
    if (user != null) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  return (
    <div>
      <h2>Existing User Sign In</h2>
      <p>
        Don't have an account yet? <Link to="/register">Register</Link>
      </p>

      <form onSubmit={handleSignInWithEmail}>
        <div>
          <label>Email Address</label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" />
        </div>
        <div>
          <label>Password</label>
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <GoogleButton onClick={googleSignIn} />
    </div>
  );
};

export default SignIn;
