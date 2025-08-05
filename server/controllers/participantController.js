const Participant = require("../models/participant");
const Course = require("../models/course");

exports.register = async (req, res) => {
  try {
    const { name, email, courseId, phone, message } = req.body;

    // Required fields validation
    if (!name || !email || !courseId) {
      return res.status(400).json({
        error: "Name, email, and course selection are required",
      });
    }

    // Name validation
    if (name.trim().length < 2 || name.trim().length > 100) {
      return res.status(400).json({
        error: "Name must be between 2 and 100 characters",
      });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: "Invalid email format",
      });
    }

    // Phone validation (if provided)
    if (phone) {
      const phoneRegex = /^[\d\s\-+()]{10,15}$/;
      if (!phoneRegex.test(phone)) {
        return res.status(400).json({
          error: "Invalid phone number format",
        });
      }
    }

    // Message length validation
    if (message && message.length > 500) {
      return res.status(400).json({
        error: "Message must not exceed 500 characters",
      });
    }

    // Check if course exists
    const course = await Course.get(courseId);
    if (!course) {
      return res.status(404).json({
        error: "Selected course not found",
      });
    }

    // Create participant
    const participant = await Participant.create({
      name,
      email,
      courseId,
      phone,
      message,
    });

    res.status(201).json({
      message: "Registration successful",
      participant,
    });
  } catch (error) {
    if (error.message === "You have already registered for this course") {
      return res.status(409).json({ error: error.message });
    }

    console.error("Registration error:", error);
    res.status(500).json({
      error: "An error occurred during registration",
    });
  }
};

exports.getAllParticipants = async (req, res) => {
  try {
    const { courseId } = req.query;
    const participants = await Participant.getAll(courseId);
    res.json(participants);
  } catch (error) {
    console.error("Error fetching participants:", error);
    res.status(500).json({
      error: "An error occurred while fetching participants",
    });
  }
};

exports.deleteParticipant = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Participant.delete(id);

    if (!result.deleted) {
      return res.status(404).json({
        error: "Participant not found",
      });
    }

    res.json({ message: "Participant deleted successfully" });
  } catch (error) {
    console.error("Error deleting participant:", error);
    res.status(500).json({
      error: "An error occurred while deleting participant",
    });
  }
};
