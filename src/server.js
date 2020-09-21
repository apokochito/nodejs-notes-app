const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname , '..', 'src', 'views'));
app.engine('.hbs', handlebars({
    defaultLayout: 'default',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(express.urlencoded({extended: false})); // Convert each received resource to json

// Global Variables

// Routes
app.get('/', (request, response) => {
    response.render('index');
})

// Static Files
app.use(express.static(path.join(__dirname + 'public'))); // Any browser will access easily to it

module.exports = app;
