const express = require("express")
let router = express.Router()
let DataController = require("../controller/DataController")
let UserController = require("../controller/UserController")

//Data
router.get("/datas", (req, res) => DataController.get(req, res));
router.get("/all", (req, res) => DataController.all(req, res));
router.post("/predict", (req, res) => DataController.predict(req, res))

//User
router.post("/login", (req, res) => UserController.logIn(req, res))
router.post("/approve", (req, res) => UserController.approve(req, res))
router.get("/user", (req, res) => UserController.get(req, res))



module.exports = router

