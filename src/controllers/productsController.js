const fetch = require("node-fetch");
const apiBaseURL = "https://dhfakestore.herokuapp.com/api";


let coca = {
	urlImagen: "images/lata-coca-cola.png",
	precio: "760",
	nombre: "Coca Cola Lata 220mL Pack Original x8",
};
let generico = {
	urlImagen: "images/producto-generico.png",
	precio: "XX.XXX",
	nombre: "NOMBRE DEL PRODUCTO O SERVICIO",
};
const productos = [coca, generico, generico, generico];
let loggedIn = false;

const getSuggestedProducts = async () => {
	try {
		let response = await fetch(`${apiBaseURL}/products/suggested`);
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

const suggestedProducts = (req, res) => {
    getSuggestedProducts().then(data => res.json(data.slice(0, 5)))
}
const mostwantedProducts = (req, res) => {
    getMostwantedProducts().then(data => res.json(data.slice(0, 10)))
}

const root = (req, res) => {
	Promise.all([getSuggestedProducts(), getMostwantedProducts()]).then((values) => {
		let suggested = values[0]
		let mostwanted = values[1]
		if (req.query.email !== undefined) {
			loggedIn = true;
		}
		res.render("pages/index", {
			interes: suggested.slice(0, 5),
			masVendidos: mostwanted.slice(0, 10),
			loggedIn,
		});
	});
};

const products = (req, res, next) => {
	res.render("pages/products", {
		products: productos,
		loggedIn,
	});
};

const cart = (req, res, next) => {
	res.render("pages/cart", { loggedIn });
};

const checkout = (req, res, next) => {
	res.render("pages/checkout", { loggedIn: false });
};

module.exports = { root, products, suggestedProducts, mostwantedProducts, cart, checkout };
