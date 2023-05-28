import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/login.css";
import { useNavigate } from "react-router-dom";

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
      <nav
        style={{
          backgroundColor: "#f8f9fa",
          padding: "10px 20px",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          to={"/"}
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "#000",
          }}
        >
          <img
            src="/assets/images/logo.png"
            alt="MyTaskBuddy Logo"
            width="30"
            height="30"
            style={{ marginRight: "10px" }}
          />
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>
            MyTaskBuddy
          </span>
        </Link>

        <ul
          style={{
            display: "flex",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li style={{ marginRight: "35px" }}>
            <Link
              to={"/"}
              style={{
                textDecoration: "none",
                color: "#000",
                transition: "color 0.3s",
              }}
              activeStyle={{ color: "blue" }}
            >
              Početna
            </Link>
          </li>
          <li style={{ marginRight: "35px" }}>
            <Link
              to={"/register"}
              style={{
                textDecoration: "none",
                color: "#000",
                transition: "color 0.3s",
              }}
              activeStyle={{ color: "blue" }}
            >
              Registruj se
            </Link>
          </li>
        </ul>
      </nav>

      <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
            style={{ color: "black" }} // Set text color to black
          />
          <label htmlFor="password">Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
            style={{ color: "black" }} // Set text color to black
          />
          <div className="container">
            <button
              onClick={navigateToHomePage}
              type="submit"
              className="login-button"
            >
              Log In
            </button>
          </div>
        </form>
        <Link
          to="/register"
          className="link-btn"
          style={{ textDecoration: "none" }}
        >
          <span>Don't have an account? Register here</span>
        </Link>
        <br />
        <Link
          to="/forgotpassword"
          className="link-btn"
          style={{ textDecoration: "none" }}
        >
          <span>Zaboravili ste lozinku? Kliknite ovdje.</span>
        </Link>
      </div>
    </>
  );
};

export default Login;
