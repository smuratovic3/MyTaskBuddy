import React from "react";
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom"; // Import only Link
import "../css/navbar.css";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link} // Use Link instead of anchor tag
              to="/Login" // Specify the path for the login screen
              className={
                activeLink === "login" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("login")}
            >
              Prijavi se
            </Nav.Link>
            <Nav.Link
              as={Link} // Use Link instead of anchor tag
              to="/Register" // Specify the path for the register screen
              className={
                activeLink === "register" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("register")}
            >
              Registruj se
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <HashLink to="#connect">
              <Link to="/login">
                {/* Add the path for the login screen */}
                <button className="vvd">
                  <span style={{ color: "black" }}>Započnite</span>
                </button>
              </Link>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
