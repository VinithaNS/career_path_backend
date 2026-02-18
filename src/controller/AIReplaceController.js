const AIImpact = require("../model/AIReplaceModel");

// ➕ Create AI Impact
exports.createAIImpact = async (req, res) => {
  try {
    const aiImpact = new AIImpact(req.body);
    const savedData = await aiImpact.save();
    res.status(201).json({
      success: true,
      message: "AI Impact record created successfully",
      data: savedData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating AI Impact record",
      error: error.message
    });
  }
};

// 📄 Get all AI Impact records
exports.getAllAIImpacts = async (req, res) => {
  try {
    const data = await AIImpact.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      message: "AI Impact records fetched successfully",
      data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching AI Impact records",
      error: error.message
    });
  }
};

// 🔍 Get single AI Impact by ID
exports.getAIImpactById = async (req, res) => {
  try {
    const data = await AIImpact.findById(req.params.id);
    if (!data) {
      return res.status(404).json({
        success: false,
        message: "AI Impact record not found"
      });
    }
    res.status(200).json({
      success: true,
      message: "AI Impact record fetched successfully",
      data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching AI Impact record",
      error: error.message
    });
  }
};

// ✏️ Update AI Impact by ID
exports.updateAIImpact = async (req, res) => {
  try {
    const updatedData = await AIImpact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedData) {
      return res.status(404).json({
        success: false,
        message: "AI Impact record not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "AI Impact record updated successfully",
      data: updatedData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating AI Impact record",
      error: error.message
    });
  }
};

// ❌ Delete AI Impact by ID
exports.deleteAIImpact = async (req, res) => {
  try {
    const deletedData = await AIImpact.findByIdAndDelete(req.params.id);

    if (!deletedData) {
      return res.status(404).json({
        success: false,
        message: "AI Impact record not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "AI Impact record deleted successfully",
      data: deletedData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting AI Impact record",
      error: error.message
    });
  }
};
