const {userCart, allCarts, addProduct} = require("../controllers/apiController")

const router = require("express").Router()


router.get("/cart", allCarts)
router.get("/cart/:userID", userCart)

router.post('/cart', addProduct)

module.exports = router