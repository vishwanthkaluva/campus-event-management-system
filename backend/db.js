const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "campus_events",   // ✅ MUST match pgAdmin
  password: "9182",
  port: 5432,
});

pool.connect((err) => {
  if (err) {
    console.error("DB Connection Error:", err);
  } else {
    console.log("Connected to:", pool.options.database); // 👈 ADD THIS
  }
});

module.exports = pool;