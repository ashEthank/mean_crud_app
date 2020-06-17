const express = require('express');
const movies = express.Router();

const Movie = require('../models/movies.js');

movies.post('/', async (req, res) => {
  try {
    const newMovie = await Movie.create(req.body)
    res.status(200).json(newMovie)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
});

movies.get('/', async (req, res) => {
  try {
    const movies = await Movie.find()
    res.status(200).json(movies)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
});

movies.put('/:id', async (req, res) => {
  try {
    const updateMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updateMovie)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
});

movies.delete('/:id', async (req, res) => {
  try {
    const deleteMovie = await Movie.findByIdAndRemove(req.params.id)
    res.status(200).json(deleteMovie)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
});

module.exports = movies
