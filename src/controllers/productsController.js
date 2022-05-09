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
const productos = [coca, generico, generico, generico]

const root = (req, res, next) => {
    res.render('pages/index', {interes, masVendidos});
}

const products = (req, res, next) => {
    res.render('pages/products',{products: productos});
}

const cart = (req, res, next) => {
    res.render('pages/cart')
}

const checkout = (req, res, next) => {
    res.render('pages/checkout')
}

module.exports = {root, products, cart, checkout}