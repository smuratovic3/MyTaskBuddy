import React, { useState } from "react";
import MenuBarHP from "../components/MenuBarHP";

export const ForgotPassword = (props) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <>
      <MenuBarHP /> {/* Add the MenuBarHP component here */}
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
