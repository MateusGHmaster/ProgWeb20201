const express = require("express")
const router = express.Router()
const mainController = require("../app/controllers/main")
const areaController = require("../app/controllers/area")
const cursoController = require("../app/controllers/curso")

router.get("/", mainController.index)
router.get("/sobre", mainController.sobre)
router.get("/game", mainController.game)
router.get("/ui", mainController.ui)

router.get("/area", areaController.index)

router.get("/curso", cursoController.index)
router.get("/curso/create", cursoController.create)
router.post("/curso/create", cursoController.create)
router.get("/curso/update/:id", cursoController.update)
router.post("/curso/update/:id", cursoController.update)
router.get("/curso/remove/:id", cursoController.remove)
router.get("/curso/:id", cursoController.read)

module.exports = router
