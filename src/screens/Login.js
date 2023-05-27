import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import only Link
import "../css/login.css";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  const navigateToHomePage = () => {
    navigate("/homepage");
  };

  return (
    <>
      <NavBar />
      <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label htmlFor="password">password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <div class="container">
            <button
              onClick={navigateToHomePage}
              type="submit"
              class="login-button"
            >
              Log In
            </button>
          </div>
        </form>
        <Link to="/register" className="link-btn">
          Don't have an account? Register here
        </Link>
        <br></br>
        <Link to="/forgorpassword" className="link-btn">
          Zaboravili ste lozinku? Kliknite ovdje.
        </Link>
      </div>
    </>
  );
};
export default Login;
