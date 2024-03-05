import React, { useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { UseRedirectToDashboard } from "./utilities";
import { RedirectToDashboardOnUser } from "./utilities";

const Register = () => {
  const { googleSignIn, createUser, user } = UserAuth();
  RedirectToDashboardOnUser(user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      UseRedirectToDashboard();
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div>
      <h2>Registration Page</h2>
      <p>
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>

      <button onClick={googleSignIn}>Sign Up With Google</button>

      {error && <p>{error}</p>}
    </div>
  );
};

export default Register;
