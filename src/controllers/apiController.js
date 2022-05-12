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

const createCart = (userID) => {
	return {
		user: userID,
		cart: [],
	};
};

const getUserCart = (userID, carts) => {
	let userCart = carts.find((x) => x.user === userID);
	if (!userCart) {
		userCart = createCart(userID);
		carts.push(userCart);
		fs.writeFileSync(
			path.resolve(__dirname, "../db/cart.json"),
			JSON.stringify(carts)
		);
	}
	return userCart;
};

const userCart = (req, res) => {
	let carts = readCart();
	let userCart = getUserCart(+req.params.userID, carts);
	res.json(userCart);
};

const addProduct = (req, res) => {
	let { nombre, cantidad, puntos, imagen, productoId } = req.body;
	let userID = req.app.locals.userLogged.id;
	let carts = readCart();
	let userCart = carts.find((x) => x.user === userID);
	if (!userCart) {
		userCart = createCart(userID);
		carts.push(userCart);
	}

	let item = userCart.cart.find((x) => x.id === productoId);
	if (item) {
		item.cantidad++;
	} else {
		userCart.cart.push({
			nombre,
			cantidad: Number(cantidad),
			puntos: Number(puntos),
			imagen,
			id: productoId,
		});
		req.app.locals.cartNotification = userCart?.cart.length | 0;
	}
	fs.writeFileSync(
		path.resolve(__dirname, "../db/cart.json"),
		JSON.stringify(carts)
	);
	res.redirect(req.url);
};

const deleteCart = (req,res) =>{
	let {id} = req.body;
	let userID = req.app.locals.userLogged.id;
	let carts = readCart();
	let userCart = carts.find((x) => x.user === userID);
	let editedCart = userCart.cart.filter((item)=>item.id!==id)
	userCart.cart= editedCart;
	fs.writeFileSync(
		path.resolve(__dirname, "../db/cart.json"),
		JSON.stringify(carts)
	);
	res.redirect("/cart")
}

module.exports = {
	userCart,
	allCarts,
	addProduct,
	deleteCart
};
