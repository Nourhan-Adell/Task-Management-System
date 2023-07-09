// // server.js
// const express = require("express");
// const { Pool } = require("pg");
// const bcrypt = require("bcrypt");

// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "TMS",
//   password: "NourhanAdel",
//   port: 5432,
// });

// const app = express();
// app.use(express.json());
// app.post("/api/login", async (req, res) => {
//   const { email, password } = req.body;
//   const query = {
//     text: "SELECT * FROM users WHERE email = $1",
//     values: [email],
//   };
//   try {
//     const result = await pool.query(query);
//     const user = result.rows[0];
//     if (!user) {
//       return res.status(401).json({ error: "Invalid email or password" });
//     }
//     // Check if password matches
//     const passwordMatch = await comparePasswords(password, user.password);
//     if (!passwordMatch) {
//       return res.status(401).json({ error: "Invalid email or password" });
//     }
//     // Return user information
//     res.status(200).json({ id: user.id, email: user.email });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// async function comparePasswords(plainPassword, hashedPassword) {
//   const match = await bcrypt.compare(plainPassword, hashedPassword);
//   return match;
// }

// // app.listen(3000, () => {
// //   console.log("Server started on http://localhost:3000");
// // });

// pages/api/submit-form.js

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // Check if email and password are correct
    if (email === "example@example.com" && password === "password123") {
      // Redirect the user to their profile page
      res.status(200).json({ redirectTo: "/profile" });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } else {
    res.status(400).json({ message: "Invalid request method" });
  }
}
