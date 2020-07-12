const Joi = require('@hapi/joi')

const movie = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  description: Joi.string().required()
})

module.exports = movie
