const fetch = require('node-fetch');

const urlBase = 'https://dhfakestore.herokuapp.com/api/products'

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
let loggedIn = false;

const root = (req, res, next) =>{
    if(req.query.email !== undefined){
        loggedIn = true
    }
    res.render('pages/index', {
        interes, masVendidos, loggedIn
    });
}

const products = (req, res, next) => {
    fetch(`${urlBase}`).then(res=>res.json()).then(json=>res.render('pages/products',{products:json,loggedIn}))
  /*   res.render('pages/products',{
        products:productos,
        loggedIn
    }); */
}

const cart = (req, res, next) => {
    res.render('pages/cart', {loggedIn})
}

const checkout = (req, res, next) =>{
    res.render('pages/checkout', {loggedIn: false})
}

const productsRelated = (req,res,next)=>{
    const { id } = req.params;
    console.log(id);
    fetch(`${urlBase}`).then(res=>res.json()).then(json=>console.log(json))
   //res.render('pages/products',{loggedIn:false})
}

module.exports = {root, products, cart, checkout, productsRelated}