import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuBarHP from "../components/MenuBarHP";

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
        if (!parentId) {
          window.location.replace("/login");
        } else {
          const response = await fetch(
            `http://localhost:8000/parents/${parentId}`
          ); // Replace with your actual API endpoint
          const userData = await response.json();
          setFirstName(userData.firstname);
          setLastName(userData.lastname);
          setEmail(userData.email);
        }
      } catch (error) {
        console.error("Error retrieving user data:", error);
      }
    };

    fetchUserData();
  }, [parentId]);

  const handleSaveChanges = async () => {
    if (!newEmail && !newPassword) {
      alert("Empty fields!");
    }
    try {
      const response = await axios.put(
        `http://localhost:8000/parents/${parentId}`,
        {
          email: newEmail,
          password: newPassword,
        }
      );
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
      <MenuBarHP /> {/* Add the MenuBarHP component here */}
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
