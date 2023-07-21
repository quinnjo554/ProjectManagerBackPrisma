const express = require("express");

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

app.locals.prisma = prisma;
const userRoute = require('./routes/user');
app.use("/User", userRoute);

app.listen(9081, () => {
  console.log("Server is running on port 3005");
});
