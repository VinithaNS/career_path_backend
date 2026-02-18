const mongoose = require("mongoose");

const aiImpactSchema = new mongoose.Schema(
  {
    roleTitle: { type: String, required: true }, // e.g., "MERN Developer", "Data Analyst"

    domain: { type: String, required: true }, // e.g., "IT", "Healthcare", "Design"

    aiReplacementRisk: {
      type: String,
      enum: ["High", "Medium", "Low", "Very Low"],
      required: true
    },

    aiCanDo: [
      {
        type: String,
        required: true // Tasks AI can automate
      }
    ],

    humansStillDo: [
      {
        type: String,
        required: true // Tasks humans still perform
      }
    ],

    futureSkills: [
      {
        type: String,
        required: false // Skills to stay relevant
      }
    ],

    careerOutlook: {
      type: String,
      required: false // Short summary of future scope
    },

    imageUrl: {
      type: String,
      required: false
    },

    description: {
      type: String,
      required: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("AIImpact", aiImpactSchema);
