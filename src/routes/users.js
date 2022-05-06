const { registerPost, getUsers } = require("../controllers/usersController")
const router = require("express").Router()
const { body } = require('express-validator');

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
    }).withMessage("Las contraseñas no coinciden.")
];

router.post("/", validarUser, registerPost)

module.exports = router