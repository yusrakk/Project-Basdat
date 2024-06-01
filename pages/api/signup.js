// pages/api/signup.js
import pool from "../../lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password } = req.body;

  try {
    const [rows] = await pool.query(
      "SELECT * FROM pembeli WHERE emailPembeli = ?",
      [email]
    );
    if (rows.length > 0) {
      return res.status(400).json({ error: "User already exists" });
    }

    await pool.query(
      "INSERT INTO pembeli (emailPembeli, passwordPembeli) VALUES (?, ?)",
      [email, password]
    );
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error signing up:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
