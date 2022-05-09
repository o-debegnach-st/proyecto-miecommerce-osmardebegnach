const { root } = require("../controllers/productsController");
const { register, login, registerPost, loginProcess } = require("../controllers/usersController");
const router = require("express").Router()
const { loginValidate, registerValidate } = require("../middlewares/formValidation")

router.get('/', root)

router.get("/register", register)

router.get("/login", login)

router.post("/register", registerValidate, registerPost)

router.post("/login", loginValidate, loginProcess)

module.exports = router