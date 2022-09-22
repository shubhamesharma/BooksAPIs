const yup = require('yup');
const emailSchema = require('../utility/emailValidation.utility');

async function emailValidator(req, res, next) {
    const valid = await emailSchema.isValid(req.body);
    if (valid) {
        next();
    }
    else {
        res.status(400),
            res.send('Invalid EmailId')
    }
}

module.exports = emailValidator;