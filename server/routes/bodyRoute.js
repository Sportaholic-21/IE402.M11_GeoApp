const bodyController = require("../controllers/bodyController")
const express = require("express")
const router = express.Router()

router.get("/bitexco_geojson", bodyController.getBitexcoGeojson)
router.get("/bitexcoKhung1_geojson", bodyController.getBitexcoKhunggeojson)
router.get("/bitexcoSanBay_geojson", bodyController.getBitexcoSanBayjson)
router.get("/bitexcoHanhChinh_geojson", bodyController.getBitexcoHanhChinhgeojson)
router.get("/bitexcoHanhChinh1_geojson", bodyController.getBitexcoHanhChinh1geojson)
router.get("/bitexcoHanhChinhBao_geojson", bodyController.getBitexcoHanhChinhBaogeojson)
router.get("/bitexco_day.geojson", bodyController.getBitexcoDaygeojson)
router.get("/bitexco_roof.geojson", bodyController.getBitexcoRoofgeojson)
router.get("/bitexco_rooftop.geojson", bodyController.getBitexcoRooftopgeojson)


router.post("/add", bodyController.addBody)
router.post("/addface", bodyController.addBodyFace)
router.post("/addfacetobody", bodyController.addFacetoBody)
router.post("/add/:file", bodyController.addAll)

router.get("/:id", bodyController.getBody)

module.exports = router;

