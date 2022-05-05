const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// requires the places-routes and users-routes files to run
const placesRoutes = require('./routes/places-routes');
const usersRoutes = require('./routes/users-routes');
const HttpError = require('./models/http-error');

const app = express();

app.use(bodyParser.json());

// Functions for the header buttons
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE'); // Allows button functions to get (import), post (export), patch (edit), and delete user cred. based on user feedback

  next();
});

// Use places and user http routes, but if there's a 404 error loading the routes, return an error message
app.use('/api/places', placesRoutes);
app.use('/api/users', usersRoutes);

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

// Use places and user http routes, but if there's a 505 error loading the routes, return an error message
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});

// Connect to the mongodb server, username: api_waphle. Pwd: apiwaphleBruv0706
mongoose //connects mongoose under mongodb API
  .connect(
    `mongodb+srv://api_waphle:apiwaphleBruv0706@cluster0.acjvx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  )
  .then(() => { //sets the backend on localhost:5000
    app.listen(5000);
  })
  .catch(err => {
    console.log(err);
  });
