import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./screens/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>
              <img
                src="./assets/images/logo.png"
                alt="MyTaskBuddy Logo"
                width="30"
                height="30"
              />{" "}
              MyTaskBuddy
            </Link>

            <div>
              <ul className="navbar-nav ml-auto">
                <li>
                  <Link className="nav-link" to={"/sign-in"}>
                    Prijavi se
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Registruj se
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/sign-in" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
