const { products } = require("../controllers/productsController");
const router = require("express").Router()

let loggedIn = false;

router.get("/", products)

module.exports = router