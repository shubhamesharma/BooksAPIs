const yup = require('yup');
const { idSchema } = require('../utility/validationSchema.utility');

async function idValidator(req, res, next) {
    const valid = await idSchema.isValid(req.params);
    if (valid) {
        next();
    } else {
        res.status(400).send('Invalid id')
    }
}

module.exports = idValidator;
