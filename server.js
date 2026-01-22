require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Routes
const taskRoutes = require("./routes/taskRouter"); 

const app = express();

// Middleware
app.use(express.json()); 
// app.use(bodyParser.json());
app.use(cors());

// Debug: check loaded env value
console.log("Loaded MONGO_URI:", process.env.MONGO_URI);

// MongoDB Connection (Mongoose 7+ compatible)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log(" MongoDB Connected"))
  .catch((err) => {
    console.error(" MongoDB Connection Error:", err.message);
    process.exit(1);
  });

// Routes
app.use("/api", taskRoutes);

// Health check
app.get("/healthz", (req, res) => {
  res.status(200).json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date()
  });
});

// Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
