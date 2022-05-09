const fs = require('fs');
const { validationResult, body } = require('express-validator');
const path = require('path');
const { getUsers } = require("../utils/auxFuncs");


const register = (req, res, next) => {
    res.render('pages/register')
}

const login = (req, res, next) => {
    res.render('pages/login')
}

const registerPost = (req, res) => {
    const errors = validationResult(req)
    const users = getUsers()
    if (errors.isEmpty()) {
        const id = users.length + 1
        req.app.locals.isLogged = id
        users.push({
            "email": req.body.email,
            "password": req.body.password,
            "id": id,
            "cart": []
        })
        fs.writeFileSync(path.resolve(__dirname,'../db/users.json'), JSON.stringify(users))
        res.render("pages/register", {
            msg: "La cuenta se creó correctamente."
        })
    } else {
        res.render('pages/register',{
            errors: errors.errors,
            old: req.body,
        })
    }
}

const validarUser = [ 
    body('email')
    .isEmail().withMessage("Se debe ingresar un email válido.")
    .custom(value => {
        getUsers().forEach(user => {
            if (value === user.email) throw new Error
        })
        return true
    }).withMessage("El e-mail ya se encuentra registrado con otra cuenta.")
    .trim(),
    body('password')
    .isLength({min: 8}).withMessage("La contraseña debe tener al menos 8 caracteres.")
    .trim(),
    body('passwordConfirmation').custom((value, { req }) => {
        if (value !== req.body.password) throw new Error
        return true
    }).withMessage("Las contraseñas deben coincidir.")
]


module.exports = { register, login, registerPost, validarUser}