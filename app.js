var cookieParser = require('cookie-parser');
var compression = require("compression");
var createError = require('http-errors');
var express = require('express');
var helmet = require("helmet");
var path = require('path');

//Import routes
const bookInstanceRouter = require('./routes/bookinstance');
const catalogRouter = require('./routes/catalog')
const authorRouter = require('./routes/author');
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const genreRouter = require('./routes/genre')
const bookRouter = require('./routes/book');

// Set up default mongoose connection
const mongoose = require('mongoose')
const dev_db_url = process.env.MONGODB_URI;
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
// Get the default connection
const db = mongoose.connection;
// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//Express server app
var app = express();

app.use(helmet()); // sets appropriate HTTP headers for security

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(compression()); // Compress all routes
// standard middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// define routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/catalog', catalogRouter);
app.use('/catalog/books', bookRouter);
app.use('/catalog/genres', genreRouter);
app.use('/catalog/authors', authorRouter);
app.use('/catalog/bookinstances', bookInstanceRouter);

//// Error Handling
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
