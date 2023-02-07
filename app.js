require('dotenv').config()

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users.routers');

var app = express();

//Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Router
app.use('/', indexRouter);
app.use('/v1', usersRouter);



app.use((err, req, res, next) => {
    console.log(err)

    const status = err.status || 500
    const error = err.error || err.message || "Internal Server Error"

    return res.status(status).json({
        status: false,
        data: {},
        error: error
    })
})

module.exports = app;