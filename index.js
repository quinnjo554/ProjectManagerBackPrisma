const express = require("express");
const cors = require('cors');

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

app.locals.prisma = prisma;
const userRoute = require('./routes/user');
const projectRoute = require('./routes/project')
const userProjectRoute = require('./routes/userProject')
const taskRoute = require("./routes/task")
app.use(cors({
  origin: 'http://localhost:3000'
}))


app.use("/User", userRoute);
app.use("/Project",projectRoute)
app.use("/UserProject",userProjectRoute)
app.use("/Task",taskRoute)

app.listen(9081, () => {
  console.log("Server is running on port 9081");
});
