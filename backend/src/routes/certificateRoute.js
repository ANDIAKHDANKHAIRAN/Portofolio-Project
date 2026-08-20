const express = require("express");
const router = express.Router();
const certificateController = require("../controller/certificateController");

router.get("/api/certificates", certificateController.getCertificates);

module.exports = router;