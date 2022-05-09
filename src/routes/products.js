const { products, suggestedProducts, mostwantedProducts, getAllProducts , productDetail} = require("../controllers/productsController");
const router = require("express").Router()

let loggedIn = false;

router.get("/:id", products)
router.get('/:id/product-detail', productDetail)
router.get('/', getAllProducts)

router.get('/suggested', suggestedProducts)

router.get('/mostwanted', mostwantedProducts)

module.exports = router