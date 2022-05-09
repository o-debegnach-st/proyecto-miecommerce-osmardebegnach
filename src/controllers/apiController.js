const fs = require("fs");
const path = require("path");


const readCart = () => {
	return JSON.parse(
		fs.readFileSync(path.resolve(__dirname, "../db/cart.json"))
	);
};

const allCarts = (req, res) => {
  res.json(readCart())
}

const userCart = (req,res) =>{
  let cart = readCart();
  console.log(req.params.userID);
  let userCart = cart.find((x)=>x.user === +req.params.userID)
  if(userCart) res.json(userCart)
  else res.render('pages/notFound')
}

const addProduct = (req, res) => {
  let {nombre, cantidad, puntos, imagen} = req.body
  let carts = readCart()
  let userCart = carts.find((x)=>x.user === +req.body.userID)
  userCart.cart.push({nombre, cantidad: Number(cantidad), puntos: Number(puntos), imagen})
  fs.writeFileSync(path.resolve(__dirname, '../db/cart.json'), JSON.stringify(carts))
  res.redirect(req.url)
}

module.exports = {
  userCart,
  allCarts,
  addProduct
}