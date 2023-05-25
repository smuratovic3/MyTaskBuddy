import React from "react";
import { NavBar } from "../components/NavBar";
import { Banner } from "../components/Banner";
import "../css/navbar.css";
import "../css/banner.css";

function WelcomeScreen() {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
    </div>
  );
}

export default WelcomeScreen;
