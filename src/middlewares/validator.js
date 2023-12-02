const { validationResult } = require('express-validator');

const validateInput = (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        res.status(400).send({error:error.array()})
    }
    next()
}
module.exports = validateInput;