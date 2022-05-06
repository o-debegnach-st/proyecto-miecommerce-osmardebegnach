const fs = require('fs');
const {validationResult} = require('express-validator');
const path = require('path');

const register = (req, res, next) => {
    res.render('pages/register', {loggedIn: false})
}

const login = (req, res, next) => {
    res.render('pages/login', {loggedIn: false})
}

const getUsers = () => JSON.parse(fs.readFileSync(path.resolve(__dirname,'../db/users.json'), "utf-8"))

const registerPost = (req, res) => {
    const errors = validationResult(req)
    const users = getUsers()
    if (errors.isEmpty()) {
        users.push(req.body)
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

module.exports = { register, login, registerPost, getUsers }