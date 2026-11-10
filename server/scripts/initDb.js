// Creates the database tables from schema.sql. Run with: npm run db:init
const fs = require("fs");
const path = require("path");
const pool = require("../db");

(async () => {
  const sql = fs.readFileSync(path.join(__dirname, "..", "schema.sql"), "utf8");
  try {
    await pool.query(sql);
    console.log("Database schema is up to date.");
  } catch (error) {
    console.error("Failed to apply schema:", error.message);
    process.exitCode = 1;
  } finally {
    await pool.end();
  }
})();
