const HomePage = require("../model/homePage");

exports.createHomePage = async (req, res) => {
  try {
    const data = await HomePage.create(req.body);
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getHomePage = async (_, res) => {
  try {
    const data = await HomePage.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getHomePageById = async (req, res) => {
  try {
    const data = await HomePage.findById(req.params.id);
    if (!data)
      return res.status(404).json({ message: "HomePage data not found" });

    res.json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateHomePage = async (req, res) => {
  try {
    const data = await HomePage.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true }
    );

    if (!data)
      return res.status(404).json({ message: "HomePage data not found" });

    res.json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteHomePage = async (req, res) => {
  try {
    const data = await HomePage.findByIdAndDelete(req.params.id);
    if (!data)
      return res.status(404).json({ message: "HomePage data not found" });

    res.json({ message: "HomePage data deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
