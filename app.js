var express = require("express");
const { error404Handler, errorHandler } = require('./middleware');

var app = express();

app.use(express.json());

app.use(error404Handler);
app.use(errorHandler);

module.exports = app;