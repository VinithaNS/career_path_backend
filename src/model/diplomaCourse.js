const mongoose = require("mongoose");

const diplomaCourseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    skills: [{ type: String }],
    syllabus: [{ type: String }],
    careerPath: [{ type: String }],
    imageUrl: { type: String },
    description: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("DiplomaCourse", diplomaCourseSchema);
/*
{
  "title": "Computer Engineering",
  "skills": ["Programming", "Networking", "Problem Solving"],
  "careerPath": ["Web Developer", "Software Engineer"],
  "imageUrl": "https://example.com/computer-eng.png",
  "description": "Skill-based diploma for IT careers."
}






*/
