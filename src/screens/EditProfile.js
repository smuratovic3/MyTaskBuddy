import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const EditProfile = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const parentId = localStorage.getItem("parentId"); // Assuming you have the parentId available

  useEffect(() => {
    // Fetch user data using parentId and update the state
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/parents/${parentId}`
        ); // Replace with your actual API endpoint
        const userData = await response.json();
        console.log(userData);
        setFirstName(userData.firstname);
        setLastName(userData.lastname);
        setEmail(userData.email);
      } catch (error) {
        console.error("Error retrieving user data:", error);
      }
    };

    fetchUserData();
  }, [parentId]);

  const handleSaveChanges = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8000/parents/${parentId}`,
        {
          email: newEmail,
          password: newPassword,
        }
      );
      console.log(response.data);
      setEmail(newEmail);
      setNewEmail("");
      setNewPassword("");
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
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
            to={"/homepage"}
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
                to={"/homepage"}
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
                to={"/editprofile"}
                style={{
                  textDecoration: "none",
                  color: "#000",
                  transition: "color 0.3s",
                }}
                activestyle={{ color: "blue" }}
              >
                Profil
              </Link>
            </li>
            <li style={{ marginRight: "35px" }}>
              <Link
                to={"/statistics"}
                style={{
                  textDecoration: "none",
                  color: "#000",
                  fontWeight: "bold",
                  transition: "color 0.3s",
                }}
                activestyle={{ color: "blue" }}
              >
                Statistika
              </Link>
            </li>
            <li>
              <Link
                to={"/login"}
                style={{
                  textDecoration: "none",
                  color: "#000",
                  transition: "color 0.3s",
                }}
                activestyle={{ color: "blue" }}
              >
                ODJAVA
              </Link>
            </li>
          </ul>
        </nav>
      </form>
      <div>
        <div
          className="container rounded bg-white mt-5 mb-5"
          style={{ maxWidth: "900px" }}
        >
          <h2 style={{ color: "black", fontSize: "24px" }}>Uredi profil</h2>
        </div>
        <div
          className="container rounded bg-white mt-5 mb-5"
          style={{ maxWidth: "900px" }}
        >
          <div className="row">
            <div className="col-md-4 text-center border-right">
              <div className="p-4">
                <img
                  className="rounded-circle profile-picture"
                  src="./assets/images/userimg.jpg"
                  alt="Profile Picture"
                />
                <h4
                  className="mt-3 font-weight-bold profile-name"
                  style={{ color: "black" }}
                >
                  {firstname} {lastname}
                </h4>

                <span className="text-black-50 profile-email">{email}</span>
              </div>
            </div>
            <div className="col-md-8">
              <div className="p-4">
                <h4
                  className="text-center profile-title"
                  style={{ color: "black" }}
                >
                  Postavke profila
                </h4>

                <div className="row mt-4"></div>

                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels" style={{ color: "black" }}>
                      Promijenite e-mail
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Unesite novi e-mail"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                      style={{ color: "black" }}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels" style={{ color: "black" }}>
                      Promijenite lozinku
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Unesite novu lozinku"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      style={{ color: "black" }}
                    />
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <button
                    className="btn btn-primary profile-button"
                    type="button"
                    onClick={handleSaveChanges}
                  >
                    Sačuvaj promjene
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
