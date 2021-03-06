const fs = require('fs');
const { validationResult, body } = require('express-validator');
const path = require('path');
const { getUsers } = require("../utils/auxFuncs");


const register = (req, res, next) => {
    req.app.locals.userLogged = null
    res.render('pages/register')
}

const login = (req, res, next) => {
    req.app.locals.userLogged = null
    res.render('pages/login')
}

const loginProcess = (req,res,next) => {
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
        return res.render("pages/login")
    }

    let userDb = getUsers().find(user => user.email === req.body.email)

    if (userDb) {
        if (req.body.password === userDb.password) {
            req.app.locals.userLogged = userDb
            res.redirect('/')

        } else
            res.render('pages/login', {
                errors: {
                    password: {
                        msg: 'Contraseña incorrecta.'
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
        const newUser = {
            "email": req.body.email,
            "password": req.body.password,
            "id": users.length + 1
        }
        req.app.locals.userLogged = newUser
        users.push(newUser)
        fs.writeFileSync(path.resolve(__dirname,'../db/users.json'), JSON.stringify(users))
        res.redirect("/")
    } else {
        res.render('pages/register', {
            errors: errors.errors,
            old: req.body,
        })
    }
}

module.exports = { register, login, registerPost, register, login, loginProcess}