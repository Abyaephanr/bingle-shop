const errorResponse = require('../helpers/error.helper')

const validate = (schema) => async (req, res, next) => {
    try {
        await schema.validateAsync(req.body)
        
    } catch (error) {

        const message = []

        error.details.forEach(details => {
            message.push({
                path: details.path[0],
                message: details.message
            })
        });
        next(new errorResponse(400, message))
        
    }
}

module.exports = {validate}