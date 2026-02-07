const mongoose = require("mongoose");

const eleventhGroupSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Science - Biology, Commerce, Arts, etc.
  subjects: [
    {
      type: String,
      required: true
    }
  ],
  careers: [
    {
      type: String,
      required: false
    }
  ],
  imageUrl: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("EleventhGroup", eleventhGroupSchema);

/*
{
  "title": "Science - Computer Science",
  "subjects": ["Physics", "Chemistry", "Computer Science", "Math"],
  "careers": ["Engineering", "Software Development"],
  "imageUrl": "https://example.com/science-cs.png",
  "description": "Best for students interested in technology and engineering."
}
*/
