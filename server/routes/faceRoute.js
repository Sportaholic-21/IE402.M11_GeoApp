const faceController = require("../controllers/faceController")
const express = require("express")
const router = express.Router()


router.post("/add", faceController.addFace)
router.post("/addNode", faceController.addFaceNode)

router.get("/bitexco_json", faceController.getBitexcoJson)


router.get("/:id", faceController.getFace)
module.exports = router;