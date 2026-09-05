const express = require("express");
const router = express.Router();
const controller = require("../controller/notecontrooler");

router.get("/", controller.getNotes);
router.post("/", controller.addNote);
router.delete("/:id", controller.deleteNote);

module.exports = router;