const { body } = require('express-validator');
const { getUsers } = require("../utils/auxFuncs");

const loginValidate = [
    body('email')
        .notEmpty()
        .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
        .matches(/^[^\s].+[^\s]$/),
    body('password')
        .notEmpty()
]

const registerValidate = [ 
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

// Validaciones
module.exports = { loginValidate, registerValidate }