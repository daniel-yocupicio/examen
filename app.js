var express = require("express");
var bodyParser = require('body-parser');
var session = require('express-session');
const cookieParser = require("cookie-parser");
var path = require('path');
const {error404Handler, errorHandler} = require('./middleware');
var routes = require('./routes');

var app = express();

const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
    secret: "keyexamen",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false 
}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());
app.use(routes);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(express.static('public'))
app.use(error404Handler);
app.use(errorHandler);

module.exports = app;