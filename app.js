var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

require('./models/connection')
var app = express();

app.locals.dateFormat = function(date){
    var newDate = new Date(date);
    var format = newDate.getDate()+'/'+(newDate.getMonth()+1)+'/'+newDate.getFullYear(); 
    return format;
  }

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'reactapp/build')));

app.use('/', indexRouter);



module.exports = app;