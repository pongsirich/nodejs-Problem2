const express = require('express')
const router = express.Router()
const userModel = require('../models/userModel')
const users = [
  {
    username: 'admin@test.com',
    password: '123456'
  }
]

router.get('/users', (req, res) => {
  return res.send({ users })
})

router.post('/user', (req, res) => {
  // #1 validate req.body with requirement, if there is some error then return it.
  // #2 "find" the user from the arrays with "not match username and password"
  // #3 return the user back if user does not exist
  // #4 return error if the user exist with status code "400" => Bad request
})

router.post('/login', (req, res) => {
  // #1 validate req.body with requirement, if there is some error then return it.
  // #2 "find" the user from the arrays with "match username and password"
  // #3 return the user back it it authenticated
  // #4 return error if the password or username did not correct with status code "401" Unathorized
})

module.exports = router
