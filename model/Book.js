const {model, Schema} = require('mongoose')


// Define a schema
const BookSchema = new Schema({
  title: String,
  author: String,
  date: Date,
});

// Define a model
const Book = model('Book', BookSchema);

module.exports = Book