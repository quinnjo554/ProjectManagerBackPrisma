const express = require("express");
const router = express.Router();
const TaskService = require("../controllers/taskController"); // Correct import path
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const taskService = new TaskService(prisma);

router.get("/project/:id", async (req, res) => {
  const id = req.params.id;
  const task = await taskService.getTaskByProjId(id);
  res.json(task);
});
router.get("/user/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const task = await taskService.getTaskForUser(id);
  res.json(task);
});
router.get("/status/:projId/:status", async (req, res) => {
  const projId = parseInt(req.params.projId);
  const status = req.params.status;
  const task = await taskService.getTaskForProjByStatus(projId, status);
  res.json(task);
});
module.exports = router;
