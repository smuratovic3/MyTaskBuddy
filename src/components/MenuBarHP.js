import React from "react";

const MenuBar = () => {
  const menuBarStyle = {
    background: "linear-gradient(79deg, #1b3ac2, #535ec7 48%, #F7944D)",
    padding: "10px",
  };

  const menuItemsStyle = {
    listStyleType: "none",
    display: "flex",
    justifyContent: "flex-end",
    margin: "0",
    padding: "0",
  };

  const menuItemStyle = {
    marginRight: "20px",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#fff",
    fontWeight: "bold",
    padding: "10px",
    borderRadius: "4px",
    transition: "background-color 0.3s ease",
  };

  const handleHover = (event) => {
    event.target.style.backgroundColor = "#555";
  };

  const handleLeave = (event) => {
    event.target.style.backgroundColor = "";
  };

  return (
    <div style={menuBarStyle}>
      <ul style={menuItemsStyle}>
        <li style={menuItemStyle}>
          <a
            href="/editprofile"
            style={linkStyle}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            Uredi profil
          </a>
        </li>
        <li style={menuItemStyle}>
          <a
            href="/statistika"
            style={linkStyle}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            Statistika
          </a>
        </li>
        <li style={menuItemStyle}>
          <a
            href="/"
            style={linkStyle}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            Odjava
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MenuBar;
