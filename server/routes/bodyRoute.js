const bodyController = require("../controllers/bodyController")
const express = require("express")
const router = express.Router()

router.get("/:id", bodyController.getBody)

router.post("/add", bodyController.addBody)
router.post("/addFace", bodyController.addBodyFace)

module.exports = router;