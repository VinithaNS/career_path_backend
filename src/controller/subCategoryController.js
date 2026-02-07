const SubCategoryData = require("../model/subCategoryModel");

exports.createSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategoryData.create(req.body);
    res.status(201).json(subCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllSubCategories = async (req, res) => {
  try {
    const subCategories = await SubCategoryData.find().populate(
      "categoryId",
      "categoryName"
    );
    res.json(subCategories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSubCategoryById = async (req, res) => {
  try {
    const subCategory = await SubCategoryData.findById(req.params.id);
    if (!subCategory)
      return res.status(404).json({ message: "SubCategory not found" });

    res.json(subCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategoryData.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true }
    );

    if (!subCategory)
      return res.status(404).json({ message: "SubCategory not found" });

    res.json(subCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategoryData.findByIdAndDelete(req.params.id);
    if (!subCategory)
      return res.status(404).json({ message: "SubCategory not found" });

    res.json({ message: "SubCategory deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
