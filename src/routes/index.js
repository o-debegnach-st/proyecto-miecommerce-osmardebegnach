const { root } = require("../controllers/productsController");
const { register, login } = require("../controllers/usersController");
const router = require("express").Router()

router.get('/', root)

router.get("/register", register)

router.get("/login", login)

module.exports = router