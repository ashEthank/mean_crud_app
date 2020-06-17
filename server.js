const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const moment = require('moment');
const app = express();

const PORT = 3000;

app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static('public'));

const moviesController = require('./controllers/moviesController.js');
app.use('/movies', moviesController);

mongoose.connect(
  'mongodb://localhost:27017/movies',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);
mongoose.connection.once('open', () => {
  console.log('Connected to mongoDB');
});

app.listen(PORT, () => {
  console.log(
  'Listening on port',
  PORT,
  'at',
  moment().format('MMMM Do YYYY, hh:mm:ss a')
  );
})
