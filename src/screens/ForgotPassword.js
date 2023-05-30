import React, { useState } from "react";
import { Link } from "react-router-dom";

export const ForgotPassword = (props) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <>
      <form>
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
                to={"/login"}
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontWeight: "bold",
                  transition: "color 0.3s",
                }}
                activeStyle={{ color: "blue" }}
              >
                Prijavi se
              </Link>
            </li>
            <li>
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
      </form>
      <div className="auth-form-container">
        <h2>Zaboravili ste lozinku?</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Unesite Vaš e-mail</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="vasemail@gmail.com"
            id="email"
            name="email"
            style={{ color: "black" }} // Set text color to black
          />

          <div className="container">
            <button type="submit" className="login-button">
              Pošalji
            </button>
          </div>
          <p>Na E-mailu ćete dobiti novu lozinku!</p>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
