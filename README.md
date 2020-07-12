# nodejs-Problem2
### Problem
- **จงเพิ่ม Endpoint สำหรับการ login และ สร้าง user**

<!-- Tips -->
## Table of Contents

* Express
* Working with JSON
* [hapi@joi](https://hapi.dev/)
  * [SchemaTester](https://hapi.dev/module/joi/tester/)
  * [Example](https://hapi.dev/module/joi/#example)



## Installation

- To install a package you need `npm` to get started
```shell
$ npm install
```

## userModel.js

```javascript
const Joi = require('@hapi/joi')

// Create user with joi
// #1 username with "email" and "required"
// #2 password with "min(6)" and "max(16)" with required
// #3 name with not required
// #4 address with not required

const user = Joi.object({})

module.exports = user

```


## userRouter.js

```javascript
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
```


## app.js

```javascript
const express = require('express')
const movieRouter = require('./router/movies')
const userRouter = require('./router/userRouter')
const app = express()
const port = 3000

app.use(express.json())

app.use(movieRouter)
app.use(userRouter)

app.listen(port, () => {
  console.log(`Server is up on port ${port}`)
})

```
