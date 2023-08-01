const express = require("express")
const router = express.Router();

const {GetStudent_Info, AgainStu_detail } = require("../Controllers/StuController");

router.route("/stud1").get(GetStudent_Info);

router.route("/stud2").get(AgainStu_detail);

module.exports = router;