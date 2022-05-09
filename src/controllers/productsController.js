const fetch = require("node-fetch");
const apiBaseURL = "https://dhfakestore.herokuapp.com/api";
const BaseURL = " https://fakestoreapi.com/"

const getSuggestedProducts = async () => {
	try {
		let response = await fetch(`${apiBaseURL}/products/suggested`);
		let data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};
const getAll = async()=>{
	try{
		let response = await fetch(`${apiBaseURL}/products`)
		let data = await response.json();
		return data;
	}catch(error){
		console.log(error)
	}
}
const getMostwantedProducts = async () => {
    try {
        let response = await fetch(`${apiBaseURL}/products/mostwanted`);
		let data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};
const getProductById = async (id)=>{
	try{
		let response = await fetch(`${apiBaseURL}/products/${id}`);
		let data = await response.json();
		return data;
	} catch(error){
		console.log(error);
	}
}
const suggestedProducts = (req, res) => {
    getSuggestedProducts().then(data => res.json(data.slice(0, 5)))
}
const mostwantedProducts = (req, res) => {
    getMostwantedProducts().then(data => res.json(data.slice(0, 10)))
}

/* const productById = (req,res)=> {
	getProductById().then(res=>res.json());
} */

const root = (req, res) => {
	Promise.all([getSuggestedProducts(), getMostwantedProducts()]).then((values) => {
		let suggested = values[0]
		let mostwanted = values[1]
		res.render("pages/index", {
			interes: suggested.slice(0, 5),
			masVendidos: mostwanted.slice(0, 10),
		});
	});
};

const products = (req, res, next) => {
	let {id}=req.params;
	Promise.all([getAll(),getProductById(id)]).then((values) => {
		let productId = values[1]
		let all = values[0].filter(product=>productId.category===product.category)
		res.render("pages/products", {
			interes: all.slice(0, 5),
			product:productId,
		});
	});
};


const getAllProducts = async(req,res)=>{
	try{
		let allProducts = await getAll();
		res.send(allProducts)
	}catch(error){
		console.log(error)
	}
};

const productDetail =async (req,res)=>{
	let {id}=req.params;
	try{
		let productId = await getProductById(id);
		let allProducts = await getAll();
		let results = allProducts.filter(product=>productId.category===product.category)
		res.send(results)
	}catch(err){
		console.log(err)
	}

}

const cart = (req, res, next) => {
	(!req.app.locals.userLogged) ? res.redirect("/") : res.render("pages/cart");
};

const checkout = (req, res, next) => {
	res.render("pages/checkout");
};

module.exports = { root, products, suggestedProducts, mostwantedProducts, cart, checkout,getAllProducts, productDetail };
