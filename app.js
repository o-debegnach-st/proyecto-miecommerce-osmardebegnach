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

app.set('port', process.env.port || 3000) 

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('assets'));

app.get('/', (req, res, next) =>{
    res.render('pages/index');
    console.log(products)
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
app.get('/userMenu',(req,res,next)=>{
    res.render('pages/userMenu');
})

path.resolve(__dirname, './assets')

app.use(express.static(path.resolve(__dirname, './assets')));


app.listen(app.get('port'), server =>{
    console.info(`Server listen on port ${app.get('port')}`);
})