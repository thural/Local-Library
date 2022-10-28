var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const catalogRouter = require("./routes/catalog"); //Import routes for "catalog" area of site

// Set up default mongoose connection
const mongoose = require('mongoose')
const dbURL = 'mongodb+srv://thural:mongoseed369@cluster0.rlei7la.mongodb.net/local_library?retryWrites=true&w=majority'
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });
// Get the default connection
const db = mongoose.connection;
// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//Express server app
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/catalog', catalogRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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


// // save and print the first book
// const Book = require('./models/book')
// // create a new book and save it
// const book = new Book({
//
// })
// const findFirstBook = async function() {
//   // save/insert the book into books collection
// await book.save()
//   // find a single book
// const firstBook = await Book.findOne({});
// console.log(firstBook);
// }
// findFirstBook()

// //test schema and model
// const ZipSchema = new mongoose.Schema({
//   city: String,
//   zip: String,
//   pop: Number,
//   state: String
// })
// // test model (or route to collection)
// const Zip = mongoose.model("Zip", ZipSchema);
// // a test query
// const findZip = async function () {
//   const zip = await Zip.find({state:"NY", pop:{"$lt":100}}).limit(3)
//   console.log(zip)
// }
// findZip()

module.exports = app;