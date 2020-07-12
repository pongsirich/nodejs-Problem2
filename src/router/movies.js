const express = require('express')
const router = express.Router()
const movieModel = require('../models/movie')

const movies = [
  {
    id: 1,
    name: 'Jaw',
    description: 'Shark'
  },
  {
    id: 2,
    name: 'The nightmare on elm street',
    description: 'Freddy'
  }
]

router.get('/movies', (req, res) => {
  return res.send({ movies })
})

router.get('/movie/:id', (req, res) => {
  const movie = movies.find(movie => {
    return movie.id == req.params.id
  })
  if (movie) {
    return res.send({ movie })
  }
  return res.status(404).send({ error: 'Movie not found' })
})

router.post('/movie', (req, res) => {
  const { error } = movieModel.validate(req.body)
  const movie = movies.find(movie => {
    return movie.id == req.body.id
  })
  if (error) {
    return res.status(400).send(error)
  }
  if (movie) {
    return res.status(201).send({ error: 'Duplicate movie id' })
  }
  movies.push(req.body)
  return res.send(req.body)
})

router.put('/movie/:id', (req, res) => {
  const { error } = movieModel.validate(req.body)
  const movieIndex = movies.findIndex(movie => {
    return movie.id == req.params.id
  })
  if (error) {
    return res.status(400).send(error)
  }
  if (movieIndex > -1) {
    const movie = req.body
    movies[movieIndex] = movie
    return res.send({ movie })
  }
  return res.status(404).send({ error: 'Movie not found' })
})

router.delete('/movie/:id', (req, res) => {
  const movieIndex = movies.findIndex(movie => {
    return movie.id == req.params.id
  })
  console.log(movieIndex)
  if (movieIndex > -1) {
    movies.splice(movieIndex, 1)
    return res.status(204).send()
  }
  return res.status(404).send({ error: 'Movie not found' })
})

module.exports = router
