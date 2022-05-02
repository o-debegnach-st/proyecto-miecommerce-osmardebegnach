const express = require('express');
const app = express();
const path = require('path');
const products =[{
    nombre:'NOMBRE DEL PRODUCTO O SERVICIO',
    puntos: 'XX.XXX'
    },
    {
    nombre:'NOMBRE DEL PRODUCTO O SERVICIO',
    puntos: 'XX.XXX'
    },
    {
    nombre:'NOMBRE DEL PRODUCTO O SERVICIO',
    puntos: 'XX.XXX'
    },
    {
    nombre:'NOMBRE DEL PRODUCTO O SERVICIO',
    puntos: 'XX.XXX'
    }]

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
    nombre: 'NOMBRE DEL PRODUCTO O SERVICO'
} 

let interes = [whiskey, generico, generico, generico]
let masVendidos = [coca, generico, generico, generico, generico, generico, generico, generico]

app.set('port', process.env.port || 3000) 

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('assets'));
app.use(express.static(path.resolve(__dirname,'./assets')));

app.get('/', (req, res, next) =>{
    res.render('pages/index', {
        interes, masVendidos
    });
})
app.get('/products', (req, res, next) =>{
    res.render('pages/products',{products:products});
})
app.get('/cart', (req, res, next) =>{
    res.render('pages/cart');
})
app.get('/checkout', (req, res, next) =>{
    res.render('pages/checkout');
})
app.get('/register', (req, res, next) =>{
    res.render('pages/register');
})
app.get('/login', (req, res, next) =>{
    res.render('pages/login');
})

path.resolve(__dirname, './assets')

app.use(express.static(path.resolve(__dirname, './assets')));


app.listen(app.get('port'), server =>{
    console.info(`Server listen on port ${app.get('port')}`);
})