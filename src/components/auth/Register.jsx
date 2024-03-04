import React, { useState, useEffect } from "react";
import { UserAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";

const Register = () => {
  const navigate = useNavigate();
  const { googleSignIn, createUser, user } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const redirectToDashboard = () => {
    navigate("/dashboard");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      redirectToDashboard();
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/dashboard");
    }
  }, [user, navigate]);


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

      <GoogleButton onClick={googleSignIn} />

      {error && <p>{error}</p>}
    </div>
  );
};

export default Register;
