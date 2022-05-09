const fs = require("fs");
const path = require("path");

const readCart = () => {
	return JSON.parse(
		fs.readFileSync(path.resolve(__dirname, "../db/cart.json"))
	);
};

const allCarts = (req, res) => {
	res.json(readCart());
};

const userCart = (req, res) => {
	let carts = readCart();
	let userCart = carts.find((x) => x.user === +req.params.userID);
	if (!userCart) {
		userCart = createCart(req.app.locals.userLogged.id);
		carts.push(userCart);
		fs.writeFileSync(
			path.resolve(__dirname, "../db/cart.json"),
			JSON.stringify(carts)
		);
	}
	res.json(userCart);
};

const createCart = (userID) => {
	return {
		user: userID,
		cart: [],
	};
};

const addProduct = (req, res) => {
	let { nombre, cantidad, puntos, imagen, productoId } = req.body;
	let userID = req.app.locals.userLogged.id;
	let carts = readCart();
	let userCart = carts.find((x) => x.user === userID);
	if (!userCart) {
		userCart = createCart(userID)
		carts.push(userCart);
	}

	let item = userCart.cart.find(x=>x.id === productoId);
	if(item){
		item.cantidad++
	}
	else{
		userCart.cart.push({
			nombre,
			cantidad: Number(cantidad),
			puntos: Number(puntos),
			imagen,
			id: productoId
		});
	}
	fs.writeFileSync(
		path.resolve(__dirname, "../db/cart.json"),
		JSON.stringify(carts)
	);
	res.redirect(req.url);
};

module.exports = {
	userCart,
	allCarts,
	addProduct,
};
