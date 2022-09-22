const yup = require('yup')
const passwordSchema = require('../utility/passwordValidation.utility')

async function passwordValidator(req, res, next) {
    const valid = await passwordSchema.isValid(req.body);
    if (valid) {
        next();
    }
    else {
        res.status(400),
            res.send('Password Required')
    }
}

module.exports = passwordValidator;