const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');


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
    nombre: 'NOMBRE DEL PRODUCTO O SERVICIO'
}

let interes = [whiskey, generico, generico, generico]
let masVendidos = [coca, generico, generico, generico, generico, generico, generico, generico]
const productos = [coca, generico, generico, generico]

const register = (req, res, next) => {
    res.render('pages/register', {loggedIn: false})
}

const login = (req, res, next) => {
    res.render('pages/login', {loggedIn: false})
}

let getUsers = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../db/users.json'), "utf-8"))


const loginProcess = (req,res,next) => {

    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
        return res.render("pages/login",{loggedIn:false})
        }

    let userDb = getUsers.find(user => user.email === req.body.email)

    console.log(userDb)
    if (userDb !== undefined) {
        if (req.body.password === userDb.password) {
            res.render('pages/index', {
                interes, masVendidos, loggedIn: true
            })

        } else
            res.render('pages/login', {loggedIn: false,
                errors: {
                    password: {
                        msg: 'Contrasenia incorrecta.'
                    }
            }})


    } else
        res.render('pages/login', {
            loggedIn: false,
            errors: {
                email: {
                    msg: 'Este email no existe en la base de datos.'
                }
            }
        })

}


module.exports = { register, login, loginProcess }