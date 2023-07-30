const express = require("express");
const router = express.Router();
const UserProjectService = require("../controllers/userProject"); // Correct import path
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const userProject = new UserProjectService(prisma);
router.get("/GetForUser/:id",async (req, res) => {
    const id = parseInt(req.params.id)
   const userProj = await userProject.getAllProjForUser(id)
   return res.json(userProj)
});

module.exports = router
