var express = require('express');
var path = require('path');
var logger = require('morgan');

var app = express();
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(req, res) {
  res.redirect('/');
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
