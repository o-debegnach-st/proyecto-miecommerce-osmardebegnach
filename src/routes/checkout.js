const { checkout } = require("../controllers/productsController")
const router = require("express").Router()

router.get("/", checkout)

module.exports = router