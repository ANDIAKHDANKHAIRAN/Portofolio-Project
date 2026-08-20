const express = require("express");
const router = express.Router();
const messageController = require("../controller/messageController");

router.post("/api/messages", messageController.sendMessage);

router.get("/api/messages", messageController.getMessage);

module.exports = router;
