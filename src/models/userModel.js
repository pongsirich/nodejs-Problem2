const Joi = require('@hapi/joi')

// Create user with joi
// #1 username with "email" and "required"
// #2 password with "min(6)" and "max(16)" with required
// #3 name with not required
// #4 address with not required

const user = Joi.object({})

module.exports = user
