const express = require("express");
const router = express.Router();
const projectController = require("../controller/projectController")

router.get("/api/projects", projectController.getProject)
router.get("/api/projects/:id", projectController.getProjectDetail)


module.exports = router;