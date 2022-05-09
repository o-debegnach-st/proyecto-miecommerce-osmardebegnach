const { root } = require("../controllers/productsController");
const { register, login, loginProcess} = require("../controllers/usersController");
const loginValidate = require('../middlewares/loginValidate');
const router = require("express").Router()

let whiskey = { 
    urlImagen: 'images/whiskey.png',
    precio: '19.900',
    nombre: 'Whiskey Jack Daniels Honey 750ml'
}; 
let coca = { 
    urlImagen: 'images/lata-coca-cola.png',
    precio: '760',
    nombre: 'Coca Cola Lata 220mL Pack Original x8'
} 
let generico = {
    urlImagen: 'images/producto-generico.png',
    precio: 'XX.XXX',
    nombre: 'NOMBRE DEL PRODUCTO O SERVICIO'
} 

let interes = [whiskey, generico, generico, generico]
let masVendidos = [coca, generico, generico, generico, generico, generico, generico, generico]
const products = [coca, generico, generico, generico]
let loggedIn = false;


router.get('/', root)

router.get("/register", register)

router.get("/login", login)

router.post("/login",loginValidate, loginProcess)

module.exports = router