const express = require("express");
const router = express.Router();
const MessageService = require("../controllers/messageController"); // Correct import path
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const messageService = new MessageService(prisma);

router.get("/user/:reciever/:sender", async (req, res) => {
  const reciever = req.params.reciever;
  const sender = req.params.sender;
  const messages = await messageService.getMessageByUserEmail(sender, reciever);
  res.json(messages);
});

module.exports = router;
