const express = require("express");
const router = express.Router();
const controller = require("../controllers/taskController");

router.post("/task", controller.createTask);
router.get("/tasklist", controller.getAllTasks);
router.get("/:id", controller.getTaskById);
router.put("/:id", controller.updateTask);   
router.delete("/:id", controller.deleteTask);

module.exports = router;
