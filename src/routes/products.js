const { products } = require("../controllers/productsController");
const router = require("express").Router()

router.get("/", products)

module.exports = router