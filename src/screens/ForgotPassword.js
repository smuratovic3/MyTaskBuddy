import React, { useState } from "react";

export const ForgotPassword = (props) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <h2>Zaboravili ste lozinku?</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Unesite Vaš e-mail</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />

        <div class="container">
          <button type="submit" class="login-button">
            Pošalji
          </button>
        </div>
        <p>Na E-mailu ćete dobiti novu lozinku!</p>
      </form>
    </div>
  );
};
export default ForgotPassword;
