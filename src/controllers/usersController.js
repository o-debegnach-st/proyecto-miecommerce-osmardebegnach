const register = (req, res, next) => {
    res.render('pages/register', {loggedIn: false})
}

const login = (req, res, next) => {
    res.render('pages/login', {loggedIn: false})
}

module.exports = { register, login }