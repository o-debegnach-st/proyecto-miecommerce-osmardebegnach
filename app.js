const express = require('express'),
    cookieParser = require('cookie-parser');
const app = express();
const path = require('path');
const indexRouter = require("./src/routes/index")
const productsRouter = require("./src/routes/products")
const cartRouter = require("./src/routes/cart")
const checkoutRouter = require("./src/routes/checkout")
const session = require("express-session");

app.use(cookieParser());


app.use(session({
    secret : "Secrettt",
    resave : false,
    saveUninitialized:false,
}));
app.set('port', process.env.port || 3000) 

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.static(path.resolve(__dirname,'./public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use("/", indexRouter)
app.use("/products", productsRouter)
app.use("/cart", cartRouter)
app.use("/checkout", checkoutRouter)

app.use((req, res) => {
    res.render('pages/notFound')
})

app.listen(app.get('port'), server =>{
    console.log(`Server listen on port ${app.get('port')}`);
})