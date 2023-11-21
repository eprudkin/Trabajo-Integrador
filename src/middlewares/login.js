const isLogged = (req, res, next) => {
    if (req.session.isLogged) {
        return next();
    }
    return res.status(401).send('Primero debes loguearte para ingresar')
}
module.exports = {
    isLogged
}