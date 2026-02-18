const express = require("express");
const router = express.Router();
const aiImpactController = require("../controller/AIReplaceController");

// Create
router.post("/create", aiImpactController.createAIImpact);

// Read all
router.get("/list", aiImpactController.getAllAIImpacts);

// Read one
router.get("/get/:id", aiImpactController.getAIImpactById);

// Update
router.put("/update/:id", aiImpactController.updateAIImpact);

// Delete
router.delete("/delete/:id", aiImpactController.deleteAIImpact);

module.exports = router;
