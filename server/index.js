const express = require("express");
const cors = require("cors");
require("dotenv").config();


const authRoutes = require("./routes/authRoutes.js");
const app = express();
app.use(cors());
app.use(express.json());

// Routes
//import sermonRoutes from "./routes/sermon.js";
//app.use("/api/events", eventRoutes);

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json;
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
