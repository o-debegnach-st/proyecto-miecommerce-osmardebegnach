const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require("./src/routes/index")
const productsRouter = require("./src/routes/products")
const cartRouter = require("./src/routes/cart")
const checkoutRouter = require("./src/routes/checkout")
const usersRouter = require("./src/routes/users")

app.set('port', process.env.port || 3000) 

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.static(path.resolve(__dirname,'./public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use("/", indexRouter)
app.use("/products", productsRouter)
app.use("/cart", cartRouter)
app.use("/checkout", checkoutRouter)

app.use("/users", usersRouter)

app.listen(app.get('port'), server =>{
    console.info(`Server listen on port ${app.get('port')}`);
})