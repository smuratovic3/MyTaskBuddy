import React, { useState } from "react";
import { Link } from "react-router-dom";

const EditProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

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
                activeStyle={{ color: "blue" }}
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
                activeStyle={{ color: "blue" }}
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
                activeStyle={{ color: "blue" }}
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
                activeStyle={{ color: "blue" }}
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
                  src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                  alt="Profile Picture"
                />
                <h4 className="mt-3 font-weight-bold profile-name">Edogaru</h4>
                <span className="text-black-50 profile-email">
                  edogaru@mail.com.my
                </span>
              </div>
            </div>
            <div className="col-md-8">
              <div className="p-4">
                <h4 className="text-right profile-title">Profile Settings</h4>
                <div className="row mt-4">
                  <div className="col-md-6">
                    <label className="labels">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      style={{ color: "black" }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Surname</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Surname"
                      value={surname}
                      onChange={(e) => setSurname(e.target.value)}
                      style={{ color: "black" }}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Mobile Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Phone Number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      style={{ color: "black" }}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Change Email</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter New Email"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                      style={{ color: "black" }}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels">Change Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter New Password"
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