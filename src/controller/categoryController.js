const CategoryData = require("../model/categoryModel");

/**
 * Create Category
 */
exports.createCategory = async (req, res) => {
  try {
    const { categoryName } = req.body;

    if (!categoryName) {
      return res.status(400).json({ message: "Category name is required" });
    }

    const newData = await CategoryData.create({ categoryName });

    return res.send({
      status: 201,
      message: "Category Created Successfully",
      data: newData
    });
  } catch (error) {
    return res.send({
      status: 500,
      message: error.message
    });
  }
};

/**
 * Get All Categories
 */
exports.getAllCategories = async (req, res) => {
  try {
    const getData = await CategoryData.find({});
    if (!getData) {
      return res.status(404).json({ message: "No Categories Found" });
    }
    return res.send({
      status: 200,
      message: "Categories fetched successfully",
      data: getData
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Get Category By ID
 */
exports.getCategoryById = async (req, res) => {
  try {
    const category = await CategoryData.findById(req.params.id);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json({
      message: "Category fetched successfully",
      data: category
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Update Category
 */
exports.updateCategory = async (req, res) => {
  try {
    const category = await CategoryData.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        updatedAt: Date.now()
      },
      { new: true }
    );

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json({
      message: "Category updated successfully",
      data: category
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * Delete Category
 */
exports.deleteCategory = async (req, res) => {
  try {
    const category = await CategoryData.findByIdAndDelete(req.params.id);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json({
      message: "Category deleted successfully"
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
