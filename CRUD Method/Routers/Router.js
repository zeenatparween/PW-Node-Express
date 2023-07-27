const express = require("express");
const {getNote, CreateNote, DeleteNote, UpdateNote} = require("../Controller/Controller");

const auth = require("../Auth/Auth");

const router = express.Router();

router.get("/", auth, getNote);
router.post("/", auth, CreateNote);
router.delete("/: id,", auth, DeleteNote);
router.put("/:id", auth, UpdateNote);

module.exports = router;