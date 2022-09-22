const yup = require('yup')

const passwordSchema = yup.object().shape({
    password : yup.string().required()
})

module.exports = passwordSchema;