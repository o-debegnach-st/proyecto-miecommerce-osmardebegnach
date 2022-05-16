const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");
const apiBaseURL = "https://dhfakestore.herokuapp.com/api";

const getSuggestedProducts = async () => {
	try {
		let response = await fetch(`${apiBaseURL}/products/suggested`);
		let data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};
const getAll = async () => {
	try {
		let response = await fetch(`${apiBaseURL}/products`);
		let data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};
const getMostwantedProducts = async () => {
	try {
		let response = await fetch(`${apiBaseURL}/products/mostwanted`);
		let data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};
const getProductById = async (id) => {
	try {
		let response = await fetch(`${apiBaseURL}/products/${id}`);
		let data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};
const suggestedProducts = (req, res) => {
	getSuggestedProducts().then((data) => res.json(data.slice(0, 5)));
};
const mostwantedProducts = (req, res) => {
	getMostwantedProducts().then((data) => res.json(data.slice(0, 10)));
};

const root = (req, res) => {
	Promise.all([getSuggestedProducts(), getMostwantedProducts()]).then(
		(values) => {
			let suggested = values[0];
			let mostwanted = values[1];
			res.render("pages/index", {
				interes: suggested.slice(0, 5),
				masVendidos: mostwanted.slice(0, 10),
			});
		}
	);
};

const products = (req, res, next) => {
	let { id } = req.params;
	Promise.all([getAll(), getProductById(id)]).then((values) => {
		let productId = values[1];
		let all = values[0].filter(
			(product) => productId.category === product.category
		);
		
		res.render("pages/products", {
			interes: all.slice(0, 5),
			product: productId,
		});
	});
};

const getAllProducts = async (req, res) => {
	try {
		let allProducts = await getAll();
		res.send(allProducts);
	} catch (error) {
		console.log(error);
	}
};

const productDetail = async (req, res) => {
	let { id } = req.params;
	try {
		let productId = await getProductById(id);
		let allProducts = await getAll();
		let results = allProducts.filter(
			(product) => productId.category === product.category
		);
		res.send(results);
	} catch (err) {
		console.log(err);
	}
};

const getUserCart = async (userID) => {
	try {
		let response = await fetch(`http://localhost:3000/api/cart/${userID}`);
		let data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

const updateCartNotification = (req, res, next) => {
	if (req.app.locals.userLogged) {
		getUserCart(req.app.locals.userLogged.id).then((userCart) => {
			req.app.locals.cartNotification = userCart?.cart.length | 0;
		});
	}
	next();
};

const cart = (req, res, next) => {
	if (!req.app.locals.userLogged) {
		res.redirect("/");
	} else {
		getUserCart(req.app.locals.userLogged.id).then((userCart) => {
			req.app.locals.cartNotification = userCart?.cart.length | 0;
			res.render("pages/cart", { productos: userCart.cart });
		});
	}
};

const checkout = (req, res, next) => {
	res.render("pages/checkout");
};

module.exports = {
	root,
	products,
	suggestedProducts,
	mostwantedProducts,
	cart,
	checkout,
	getAllProducts,
	productDetail,
	updateCartNotification,
};
