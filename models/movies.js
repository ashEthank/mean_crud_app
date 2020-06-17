const mongoose = require('mongoose');

const moviesSchema = mongoose.Schema(
  {
    title: {type: String, required: true},
    year: String,
    rating: String,
    director: String,
    cast: String,
    poster: String
  }
)

module.exports = mongoose.model('Movie', moviesSchema)
