const express = require("express");
const router = express.Router();
const UserService = require("../controllers/userController"); // Correct import path
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const userService = new UserService(prisma);
router.get("/", (req, res) => {
  controller.get(req, res);
});

router.get("/email/:email", async (req, res) => {
  const email = req.params.email;
  try {
    const user = await userService.getUserByEmail(email);
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: "User not found" });
  }
});

router.get("/email/all/:email", async (req, res) => {
  const email = req.params.email;
  try {
    const user = await userService.getAllUserWithEmail(email);
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: "Users not found" });
  }
});

// POST create user
router.post("/post", async (req, res) => {
  const userRequest = req.body;
  try {
    const user = await userService.createUser(userRequest);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: "User creation failed" });
  }
});

// DELETE user by email
router.delete("/delete/:email", async (req, res) => {
  const email = req.params.email;
  try {
    await userService.deleteUserByEmail(email);
    res.sendStatus(204);
  } catch (error) {
    res.status(404).json({ error: "User not found" });
  }
});
module.exports = router;
