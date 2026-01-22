const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    assigned_to: {
      type: String,
      required: true,
      trim: true
    },

    status: {
      type: String,
      enum: ["pending", "in_progress", "completed"],
      default: "pending"
    },

    due_date: {
      type: Date,
      required: true
    },

    priority: {
      type: String,
      enum: ["low", "Normal", "high"],
      default: "Normal"
    },

    description: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true // creates createdAt & updatedAt
  }
);

module.exports = mongoose.model("Task", TaskSchema);
