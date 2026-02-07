const express = require("express");
const router = express.Router();
const homePageController = require("../controller/homePageController");

router.post("/create", homePageController.createHomePage);
router.get("/list", homePageController.getHomePage);
router.get("/:id", homePageController.getHomePageById);
router.put("/:id", homePageController.updateHomePage);
router.delete("/:id", homePageController.deleteHomePage);

module.exports = router;
