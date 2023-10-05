const express = require("express");
const apodController = require("../controllers/apodController");
const router = express.Router();


router.get("/", apodController.getApodData);

module.exports = router;