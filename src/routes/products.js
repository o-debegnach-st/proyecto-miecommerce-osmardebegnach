<<<<<<< HEAD
const { products } = require("../controllers/productsController");
const { productsRelated } = require("../controllers/productsController");
=======
const { products, suggestedProducts, mostwantedProducts } = require("../controllers/productsController");
>>>>>>> 0f39c37f1b5dcafed0ea87b3222369ce01596a3c
const router = require("express").Router()

let loggedIn = false;

router.get("/", products)
router.get('/:id', productsRelated )

router.get('/suggested', suggestedProducts)

router.get('/mostwanted', mostwantedProducts)

module.exports = router