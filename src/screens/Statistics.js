import React from "react";
import { Link } from "react-router-dom";

class Statistics extends React.Component {
  render() {
    const { data } = this.props;

    return (
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
                style={{ textDecoration: "none", color: "#000" }}
              >
                Početna
              </Link>
            </li>
            <li style={{ marginRight: "35px" }}>
              <Link
                to={"/editprofile"}
                style={{ textDecoration: "none", color: "#000" }}
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
                }}
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
                }}
              >
                ODJAVA
              </Link>
            </li>
          </ul>
        </nav>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            padding: "50px",
            boxSizing: "border-box",
            backgroundColor: "#f8f9fa",
          }}
        >
          <div
            style={{
              maxWidth: "700px",
              width: "100%",
              margin: "auto",
              backgroundColor: "#fff",
              boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
              padding: "50px 25px 45px 25px",
              borderRadius: "15px",
              transition: "all 0.3s",
              textAlign: "left",
            }}
          >
            <h1
              style={{ textAlign: "center", fontSize: "30px", color: "black" }}
            >
              STATISTIKA
            </h1>
            <div
              style={{
                marginTop: "30px",
                overflowX: "auto",
              }}
            >
              <table
                style={{
                  borderCollapse: "collapse",
                  margin: "0 auto",
                  width: "100%",
                  backgroundColor: "#fff",
                }}
              >
                <thead>
                  <tr
                    style={{
                      backgroundColor: "#a4afb9",
                      color: "#fff",
                    }}
                  >
                    <th style={{ padding: "8px", color: "black" }}>
                      Aktivnosti
                    </th>
                    <th style={{ padding: "8px", color: "black" }}>
                      Vrijeme početka
                    </th>
                    <th style={{ padding: "8px", color: "black" }}>
                      Vrijeme završetka
                    </th>
                    <th style={{ padding: "8px", color: "black" }}>Mjesto</th>
                    <th style={{ padding: "8px", color: "black" }}>
                      Prosječno trajanje
                    </th>
                    <th style={{ padding: "8px", color: "black" }}>
                      Završena aktivnost
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.length > 0 &&
                    data.map((activity, index) => (
                      <tr key={index}>
                        <td
                          style={{ border: "1px solid black", padding: "8px" }}
                        >
                          {activity.col1}
                        </td>
                        <td
                          style={{ border: "1px solid black", padding: "8px" }}
                        >
                          {activity.col2}
                        </td>
                        <td
                          style={{ border: "1px solid black", padding: "8px" }}
                        >
                          {activity.col3}
                        </td>
                        <td
                          style={{ border: "1px solid black", padding: "8px" }}
                        >
                          {activity.col4}
                        </td>
                        <td
                          style={{ border: "1px solid black", padding: "8px" }}
                        >
                          {activity.col5}
                        </td>
                        <td
                          style={{ border: "1px solid black", padding: "8px" }}
                        >
                          {activity.col6}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Statistics;
