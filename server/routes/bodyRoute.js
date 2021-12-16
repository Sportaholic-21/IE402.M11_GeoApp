const bodyController = require("../controllers/bodyController")
const express = require("express")
const router = express.Router()

router.get("/bitexco_geojson", bodyController.getBitexcoGeojson)
router.get("/bitexcoKhung1_geojson", bodyController.getBitexcoKhung1geojson)
router.get("/bitexcoSanBay_geojson", bodyController.getBitexcoSanBayjson)
router.get("/bitexcoHanhChinh_geojson", bodyController.getBitexcoHanhChinhgeojson)
router.get("/bitexcoHanhChinh1_geojson", bodyController.getBitexcoHanhChinh1geojson)
router.get("/bitexcoHanhChinhBao_geojson", bodyController.getBitexcoHanhChinhBaogeojson)

router.post("/add", bodyController.addBody)
router.post("/addFace", bodyController.addBodyFace)

router.get("/:id", bodyController.getBody)

module.exports = router;