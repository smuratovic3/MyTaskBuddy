import React, { useState } from "react";
import "../css/register.css";
import { Link } from "react-router-dom"; // Import only Link
import { useNavigate } from "react-router-dom";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  const navigateToHomePage = () => {
    navigate("/homepage");
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="full Name"
        />
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
        <div class="containerRegistr">
          <button
            onClick={navigateToHomePage}
            type="submit"
            class="registr-button"
          >
            Register
          </button>
        </div>
      </form>
      <Link to="/login" className="link-btn">
        Already have an account? Login here.
      </Link>
    </div>
  );
};

export default Register;
