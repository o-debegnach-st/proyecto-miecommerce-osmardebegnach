const { products } = require("../controllers/productsController");
const { productsRelated } = require("../controllers/productsController");
const router = require("express").Router()

let loggedIn = false;

router.get("/", products)
router.get('/:id', productsRelated )

module.exports = router