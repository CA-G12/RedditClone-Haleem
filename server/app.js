require('dotenv').config();
const { join } = require('path');
const express = require('express');
const compression = require('compression');
const cookieparser = require('cookie-parser');
const router = require('./router');

const app = express();


app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieparser());
app.use(express.static(join(__dirname, '..', 'public')));
app.use(router);
app.set('port', process.env.PORT || 3000);

module.exports = app;