const { root } = require("../controllers/productsController");
const { register, login, loginProcess} = require("../controllers/usersController");
const loginValidate = require('../middlewares/loginValidate');
const router = require("express").Router()

router.get('/', root)

router.get("/register", register)

router.get("/login", login)

router.post("/login", loginValidate, loginProcess)

module.exports = router