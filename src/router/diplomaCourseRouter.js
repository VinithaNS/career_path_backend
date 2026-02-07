const express = require("express");
const router = express.Router();
const diplomaCourseController = require("../controller/diplomaCourseController");
// Routes
router.post("/create", diplomaCourseController.createDiplomaCourse);
router.get("/list", diplomaCourseController.getAllDiplomaCourses);
router.get("/:id", diplomaCourseController.getDiplomaCourseById);
router.put("/:id", diplomaCourseController.updateDiplomaCourse);
router.delete("/:id", diplomaCourseController.deleteDiplomaCourse);

module.exports = router;
