const express = require("express");
const router = express.Router();
const subCategoryController = require("../controller/subCategoryController");

router.post("/create", subCategoryController.createSubCategory);
router.get("/list", subCategoryController.getAllSubCategories);
router.get("/:id", subCategoryController.getSubCategoryById);
router.put("/:id", subCategoryController.updateSubCategory);
router.delete("/:id", subCategoryController.deleteSubCategory);

module.exports = router;
