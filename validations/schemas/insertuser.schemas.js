const joi = require('joi')

const insertUserSchemas = joi.object({
    email: joi.string().email().required().min(5),
    password: joi.string().min(8).required()
}).required()

module.exports = {insertUserSchemas}