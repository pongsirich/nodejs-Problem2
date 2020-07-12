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
