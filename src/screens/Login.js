import React from "react";
import "../css/login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <h1>Prijava</h1>
      <form>
        <div className="form-group">
          <label htmlFor="first-name">Ime:</label>
          <input type="text" id="first-name" name="first-name" />
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Prezime:</label>
          <input type="text" id="last-name" name="last-name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Lozinka:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Prijavi se</button>
        <p>
          Nemate račun? <Link to="/register">Registruj se</Link>
        </p>
      </form>
      <div className="bottom-text">
        <p>
          <Link to="/forgot-password">Zaboravili ste lozinku?</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
