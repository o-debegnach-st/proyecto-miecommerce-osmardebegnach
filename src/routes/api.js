const {userCart, allCarts, addProduct , deleteCart} = require("../controllers/apiController")

const router = require("express").Router()


router.get("/cart", allCarts)
router.get("/cart/:userID", userCart)

router.post('/cart', addProduct)
router.post("/cart/:userID" , deleteCart)

module.exports = router