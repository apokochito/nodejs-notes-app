const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const session = require('express-session');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, '..', 'src', 'views'));
app.engine('.hbs', handlebars({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Cookies and SameSite + Secure - ExpressJS
const sessionConfig = {
    secret: 'MYSECRET',
    name: 'appName',
    resave: false,
    saveUninitialized: false,
    cookie: {
        sameSite: 'strict',
    }
};
if (process.env.NODE_ENV === 'production') {
    app.set('trust proxy', 1); // trust first proxy
    sessionConfig.cookie.secure = true; // serve secure cookies
}
app.use(session(sessionConfig));

// Middlewares
app.use(express.urlencoded({ extended: false })); // Convert each received resource to json

// Global Variables

// Routes
app.use(require('./routes/index.routes'));

// Static Files
app.use(express.static(path.join(__dirname, 'public'))); // Any browser will access easily to them

module.exports = app;
