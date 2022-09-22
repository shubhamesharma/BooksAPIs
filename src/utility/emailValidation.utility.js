const yup = require('yup');

const emailSchema = yup.object().shape({
    emailId:yup.string().email()
});

module.exports = emailSchema;