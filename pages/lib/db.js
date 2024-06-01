// lib/db.js
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost", // atau host database Anda
  user: "root", // atau user database Anda
  password: "", // password database Anda
  database: "toko_baju", // nama database Anda
});

export default pool;
