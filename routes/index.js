const express = require("express")
let router = express.Router()
let DataController = require("../controller/DataController")
let UserController = require("../controller/UserController")

router.get("/datas", (req, res) => DataController.get(req, res));
router.post("/predict", (req, res) => DataController.predict(req, res))
router.post("/login", (req, res) => UserController.logIn(req, res))



module.exports = router

