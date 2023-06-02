import React, { useState } from "react";
import "../css/register.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [isTeacher, setIsTeacher] = useState(false); // State for the teacher checkbox
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
                activestyle={{ color: "blue" }}
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
                  transition: "color 0.3s",
                }}
                activestyle={{ color: "blue" }}
              >
                Prijavi se
              </Link>
            </li>
          </ul>
        </nav>
      </form>
      <div className="auth-form-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Ime</label>
          <input
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="Ime"
            style={{ color: "black" }} // Set text color to black
          />
          <label htmlFor="surname">Prezime</label>
          <input
            value={name}
            name="surname"
            onChange={(e) => setName(e.target.value)}
            id="surname"
            placeholder="Prezime"
            style={{ color: "black" }} // Set text color to black
          />
          <label htmlFor="email">E-mail</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="vasemail@gmail.com"
            id="email"
            name="email"
            style={{ color: "black" }} // Set text color to black
          />
          <label htmlFor="password">Lozinka</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
            style={{ color: "black" }} // Set text color to black
          />
          <div className="teacher-checkbox">
            <input
              type="checkbox"
              id="teacher"
              name="teacher"
              checked={isTeacher}
              onChange={(e) => setIsTeacher(e.target.checked)}
            />
            <label htmlFor="teacher">Registruj se kao nastavnik</label>
          </div>
          <div className="containerRegistr">
            <button
              onClick={navigateToHomePage}
              type="submit"
              className="registr-button"
            >
              Registruj se
            </button>
          </div>
        </form>
        <Link to="/login" className="link-btn">
          Već imate račun? Prijavite se ovdje.
        </Link>
      </div>
    </>
  );
};

export default Register;
