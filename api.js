const client = require("./connection.js");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, "public")));

// Fallback route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const query = `
      SELECT * FROM parents
      WHERE email = $1 AND password = $2
      LIMIT 1;
    `;

  const values = [email, password];

  try {
    const { rows } = await client.query(query, values);

    if (rows.length === 1) {
      const query2 = `
         SELECT id FROM parents
          WHERE email = $1 AND password = $2;
        `;

      const result = await client.query(query2, values);
      const parentId = result.rows[0].id;
      res
        .status(200)
        .json({ message: "Logged in successfully!", parentId: parentId });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An error occurred" });
  }
});

app.post("/register", async (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const password = req.body.password;

  const query = `
    INSERT INTO parents (firstname,lastname,email,password)
    VALUES ($1, $2, $3, $4)
    RETURNING id;
  `;

  const values = [firstname, lastname, email, password];

  try {
    const result = await client.query(query, values);
    const parentId = result.rows[0].id;
    res
      .status(200)
      .json({ message: "Registration successful!", parentId: parentId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An error occurred" });
  }
});

app.post("/tasks", async (req, res) => {
  const { activity, date, startTime, endTime, location, priority, username } =
    req.body;

  try {
    // Search for userId based on the provided username
    const userQuery = "SELECT id FROM users WHERE username = $1";
    const userValues = [username];
    const userResult = await client.query(userQuery, userValues);

    // Check if the user with the given username exists
    if (userResult.rowCount === 0) {
      res.status(404).send("User not found");
      return;
    }

    const userId = userResult.rows[0].id;

    const query = `INSERT INTO tasks (activity, date, "startTime", "endTime", location, priority, progress, status, "userId")
                   VALUES ($1, $2, $3, $4, $5, $6, 0, 0, $7)`;
    const values = [
      activity,
      date,
      startTime,
      endTime,
      location,
      priority,
      userId,
    ];

    await client.query(query, values);
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.listen(8000, () => {
  console.log("Sever is now listening at port 8000");
});

client.connect();
