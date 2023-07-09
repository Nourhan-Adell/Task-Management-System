import { Pool } from "pg";
import bcrypt from "bcryptjs";
import SignupForm from "../../Components/startPages/signup";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "TMS",
  password: "NourhanAdel",
  port: 5432,
});

export default async function handler(req, res) {
  console.log("Reached.....");
  if (req.method === "POST") {
    const { firstname, secondname, phonenumber, email, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    const query = {
      text: "INSERT INTO users (firstname, secondname, phonenumber, email, password) VALUES ($1, $2, $3, $4, $5)",
      values: [firstname, secondname, phonenumber, email, hashedPassword],
    };
    try {
      const result = await pool.query(query);
      console.log(result);
      res.status(200).json({ message: "User created successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
