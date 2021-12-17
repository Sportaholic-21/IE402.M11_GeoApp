const nodeController = require("../controllers/nodeController")
const express = require("express")
const router = express.Router()

router.get("/:id", nodeController.getNode)

router.post("/add", nodeController.addNode)

module.exports = router