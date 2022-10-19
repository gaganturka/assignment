const Joi = require('@hapi/joi');
const { response } = require('express');

const validateRequest = async (req, schema, res) => {
    return new Promise((resolve, reject) => {
        const { error } = Joi.validate(req, schema)
            .then((data) => {
                return resolve(data);
            })
            .catch(err => {
                console.log('error', err.details);
                return resolve(err.details);
            });
    })

}



const sendSuccess = (response, res) => {
    const statusCode = response.statusCode ? response.statusCod : 200
    const message = response.message ? response.message : 'sucessfull'
    const data = response.data ? response.data : {}

    return res.json({
        statusCode,
        message,
        data
    })
}

const sendError = (response, req) => {
    return res.json({
        statusCode : 400,
        message : 'please enter a valid email or password'

    })
}
module.exports = {
    validateRequest,
    sendSuccess,
    sendError
}