const express = require("express");
const router = express.Router();
const testimonialController = require("../controller/testimonialController");

router.get("/api/testimonials", testimonialController.getTestimonials);

module.exports = router;