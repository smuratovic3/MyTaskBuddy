import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Statistics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    axios
      .get("http://localhost:8000/get-tasks")
      .then((response) => {
        console.log(response.data);
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  calculateAverageDuration = (activityName) => {
    const { data } = this.state;
    const filteredData = data.filter(
      (activity) => activity.activity === activityName
    );

    if (filteredData.length === 0) {
      return "N/A";
    }

    const totalDuration = filteredData.reduce((sum, activity) => {
      const startTime = new Date(activity.userStartTime);
      const endTime = new Date(activity.userEndTime);
      const duration = endTime - startTime;
      return sum + duration;
    }, 0);

    const averageDuration = totalDuration / filteredData.length;
    const averageHours = Math.floor(averageDuration / 3600000);
    const averageMinutes = Math.floor((averageDuration % 3600000) / 60000);

    return `${averageHours}h ${averageMinutes}m`;
  };

  render() {
    const { data } = this.state;

    const filteredData = data.filter(
      (activity, index, self) =>
        activity.status === 2 &&
        index === self.findIndex((a) => a.activity === activity.activity)
    );

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
              width: "100%",
              margin: "auto",
              backgroundColor: "#fff",
              boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
              padding: "100px 100px 155px 100px",
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
                maxHeight: "300px", // Add max height to enable scrolling
                maxWidth: "900px",
              }}
            >
              <table
                style={{
                  borderWidth: "4px", // Specify the border width
                  borderCollapse: "collapse",
                  width: "100%",
                  backgroundColor: "#fff",
                  fontSize: "20px", // Adjust the font size
                  color: "#000", // Set the text color to black
                }}
              >
                <thead
                  style={{
                    position: "sticky",
                    top: 0,
                    backgroundColor: "#E6E6FA",
                  }}
                >
                  <tr>
                    <th
                      style={{
                        padding: "10px",
                        color: "black",
                        borderBottom: "2px solid #000", // Add a thicker bottom border
                        textAlign: "center",
                        borderWidth: "4px",
                      }}
                    >
                      Aktivnosti
                    </th>

                    <th
                      style={{
                        padding: "10px",
                        color: "black",
                        borderBottom: "2px solid #000", // Add a thicker bottom border
                        textAlign: "center",
                        borderWidth: "4px",
                      }}
                    >
                      Mjesto
                    </th>
                    <th
                      style={{
                        padding: "20px",
                        color: "black",
                        borderBottom: "2px solid #000", // Add a thicker bottom border
                        textAlign: "center",
                        borderWidth: "4px",
                      }}
                    >
                      Prosječno trajanje
                    </th>
                  </tr>
                </thead>
                <tbody
                  style={{
                    borderWidth: "4px", // Specify the border width
                  }}
                >
                  {filteredData.map((activity, index) => (
                    <tr key={index}>
                      <td
                        style={{
                          padding: "20px",
                          borderBottom: "1px solid #ccc",
                          borderWidth: "4px",
                        }}
                      >
                        {activity.activity}
                      </td>

                      <td
                        style={{
                          padding: "10px",
                          borderBottom: "2px solid #ccc",
                          borderWidth: "4px",
                        }}
                      >
                        {activity.location}
                      </td>
                      <td
                        style={{
                          padding: "10px",
                          borderBottom: "1px solid #ccc",
                          borderWidth: "4px",
                        }}
                      >
                        {this.calculateAverageDuration(activity.activity)}
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
