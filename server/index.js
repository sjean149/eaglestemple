const express = require("express");
const cors = require("cors");
require("dotenv").config();


const authRoutes = require("./routes/authRoutes.js");
const app = express();

// CLIENT_URL can be one origin or a comma-separated list
// (e.g. the Render static site URL plus http://localhost:5173).
const allowedOrigins = (process.env.CLIENT_URL || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim().replace(/\/$/, ""))
  .filter(Boolean);

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

// Routes
//import sermonRoutes from "./routes/sermon.js";
//app.use("/api/events", eventRoutes);

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({ status: "ok", service: "eagles-temple-api" });
});

// Render pings this to check the service is up.
app.get("/healthz", (req, res) => {
  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
