const { Pool } = require("pg");
require("dotenv").config();

// On Render, DATABASE_URL is provided by the linked Postgres database.
// Locally, fall back to the individual DB_* variables in .env.
const pool = process.env.DATABASE_URL
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl:
        process.env.DATABASE_SSL === "false"
          ? false
          : { rejectUnauthorized: false },
    })
  : new Pool({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
    });

module.exports = pool;
