require("dotenv").config();
const express = require("express");
// cors (cross origin request (request from different))
const cors = require("cors")
const connectToDb = require("./Config/ConnectDB.js");
const userRouter = require("./Router/UserRouter.js");
const app = express();

// Express middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

// init connection to DB
connectToDb();
app.use("/", userRouter )
module.exports = app;