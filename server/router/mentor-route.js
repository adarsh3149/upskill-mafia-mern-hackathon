const express = require("express");
const router = express.Router();
const mentorController = require("../controller/mentor-controller");

router.route("/mentors").get(mentorController.mentors);

router.route("/:id").get(mentorController.mentorById);

module.exports = router;
