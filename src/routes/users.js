const { registerPost, validarUser } = require("../controllers/usersController")
const router = require("express").Router()

router.post("/", validarUser, registerPost)

module.exports = router