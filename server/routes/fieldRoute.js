const fieldController = require('../controllers/fieldController')
const express = require("express");
const router = express.Router();

router.get("/:id", fieldController.getField)

router.post("/add", fieldController.addField)

module.exports = router