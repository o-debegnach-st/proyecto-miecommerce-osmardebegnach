const { products, suggestedProducts, mostwantedProducts } = require("../controllers/productsController");
const router = require("express").Router()

let loggedIn = false;

router.get("/", products)
router.get('/:id', productsRelated )

router.get('/suggested', suggestedProducts)

router.get('/mostwanted', mostwantedProducts)

module.exports = router