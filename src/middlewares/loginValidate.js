const path = require('path');
const { body } = require('express-validator');

// Validaciones
module.exports = [
    body('email')
        .notEmpty()
        .matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
        .matches(/^[^\s].+[^\s]$/),
    body('password')
        .notEmpty()
]