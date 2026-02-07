const express = require("express");
const router = express.Router();
const CategoryController = require("../controller/categoryController");

router.post("/add", CategoryController.createCategory);

router.get("/list", CategoryController.getAllCategories);

router.get("/:id", CategoryController.getCategoryById);

router.put("/:id", CategoryController.updateCategory);

router.delete("/:id", CategoryController.deleteCategory);

module.exports = router;
