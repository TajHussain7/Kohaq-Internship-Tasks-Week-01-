const express = require("express");
const router = express.Router();
const participantController = require("../controllers/participantController");

// Register new participant
router.post("/register", participantController.register);

// Get all participants (with optional courseId filter)
router.get("/participants", participantController.getAllParticipants);

// Delete participant
router.delete("/participants/:id", participantController.deleteParticipant);

module.exports = router;
