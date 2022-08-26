var express = require("express");
const {error404Handler, errorHandler} = require('./middleware');
var path = require('path');
var routes = require('./routes');

var app = express();

app.use(express.json());
app.use(routes);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(express.static('public'))
app.use(error404Handler);
app.use(errorHandler);

module.exports = app;