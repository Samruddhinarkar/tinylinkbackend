require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const linkRoute = require("./routes/linkRouter");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Debug: check loaded env value
console.log("Loaded MONGO_URI:", process.env.MONGO_URI);

// ✅ MongoDB Connection (NO extra options for Mongoose 7+)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));

// Routes
app.use("/api", linkRoute);

// Health check
app.get("/healthz", (req, res) => {
  res.status(200).json({ ok: true, version: "1.0" });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
