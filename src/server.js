const express = require('express');
const path = require('path');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname + 'views'));

// Middlewares
app.use(express.urlencoded({extended: false})); // Convert each received resource to json

// Global Variables

// Routes
app.get('/', (request, response) => {
    response.send('Wops');
})

// Static Files
app.use(express.static(path.join(__dirname + 'public'))); // Any browser will access easily to it

module.exports = app;