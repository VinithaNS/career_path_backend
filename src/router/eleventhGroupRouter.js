const express = require("express");
const router = express.Router();
const groupController = require("../controller/eleventhGroupController");

// Routes
router.post("/create", groupController.createEleventhGroup);
router.get("/list", groupController.getAllEleventhGroups);
router.get("/:id", groupController.getEleventhGroupById);
router.put("/:id", groupController.updateEleventhGroup);
router.delete("/:id", groupController.deleteEleventhGroup);

module.exports = router;
