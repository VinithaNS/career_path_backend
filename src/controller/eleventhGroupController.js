const EleventhGroup = require("../model/eleventhGroupModel");

exports.createEleventhGroup = async (req, res) => {
  try {
    const eleventhGroup = new EleventhGroup(req.body);
    const savedGroup = await eleventhGroup.save();

    res.status(201).json({
      success: true,
      data: savedGroup
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

exports.getAllEleventhGroups = async (req, res) => {
  try {
    const groups = await EleventhGroup.find();

    res.status(200).json({
      success: true,
      count: groups.length,
      data: groups
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getEleventhGroupById = async (req, res) => {
  try {
    const group = await EleventhGroup.findById(req.params.id);

    if (!group) {
      return res.status(404).json({
        success: false,
        message: "Eleventh Group not found"
      });
    }

    res.status(200).json({
      success: true,
      data: group
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

exports.updateEleventhGroup = async (req, res) => {
  try {
    const updatedGroup = await EleventhGroup.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedGroup) {
      return res.status(404).json({
        success: false,
        message: "Eleventh Group not found"
      });
    }

    res.status(200).json({
      success: true,
      data: updatedGroup
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

exports.deleteEleventhGroup = async (req, res) => {
  try {
    const deletedGroup = await EleventhGroup.findByIdAndDelete(req.params.id);

    if (!deletedGroup) {
      return res.status(404).json({
        success: false,
        message: "Eleventh Group not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Eleventh Group deleted successfully"
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};
