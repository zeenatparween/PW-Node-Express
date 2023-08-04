const express = require("express")
const router = express.Router();

const {home, createUser, getUser, deleteUser, editUser} = require("../Controller/UserController.js")

router.get("/", home)
router.post("/createuser", createUser)
router.get("/getuser", getUser)
router.put('/edituser/:id', editUser)
router.delete("/deleteuser/:id", deleteUser)

module.exports = router;