const DiplomaCourse = require("../model/diplomaCourse");

exports.createDiplomaCourse = async (req, res) => {
  try {
    const course = new DiplomaCourse(req.body);
    const savedCourse = await course.save();

    res.status(201).json({
      success: true,
      data: savedCourse
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

exports.getAllDiplomaCourses = async (req, res) => {
  try {
    const courses = await DiplomaCourse.find();

    res.status(200).json({
      success: true,
      count: courses.length,
      data: courses
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getDiplomaCourseById = async (req, res) => {
  try {
    const course = await DiplomaCourse.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Diploma Course not found"
      });
    }

    res.status(200).json({
      success: true,
      data: course
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

exports.updateDiplomaCourse = async (req, res) => {
  try {
    const updatedCourse = await DiplomaCourse.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedCourse) {
      return res.status(404).json({
        success: false,
        message: "Diploma Course not found"
      });
    }

    res.status(200).json({
      success: true,
      data: updatedCourse
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

exports.deleteDiplomaCourse = async (req, res) => {
  try {
    const deletedCourse = await DiplomaCourse.findByIdAndDelete(req.params.id);

    if (!deletedCourse) {
      return res.status(404).json({
        success: false,
        message: "Diploma Course not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Diploma Course deleted successfully"
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};
