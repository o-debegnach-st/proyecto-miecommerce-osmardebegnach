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



const loginProcess = (req,res,next) => {

    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
        return res.render("pages/login",{loggedIn:false})
        }

    let userDb = getUsers().find(user => user.email === req.body.email)

    console.log(userDb)
    if (userDb !== undefined) {
        if (req.body.password === userDb.password) {
            res.redirect('/')

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


const registerPost = (req, res) => {
    const errors = validationResult(req)
    const users = getUsers()
    if (errors.isEmpty()) {
        users.push({
            "email": req.body.email,
            "password": req.body.password,
            "id": users.length,
        })
        fs.writeFileSync(path.resolve(__dirname,'../db/users.json'), JSON.stringify(users))
        req.app.locals.isLogged = true
        req.app.locals.userLogged = users[users.length-1]
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


module.exports = { register, login, registerPost, validarUser, register, login, loginProcess}
