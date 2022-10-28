const express = require("express");
const router = express.Router();

// Require controller modules.
const book = require("../controllers/bookController");
const author = require("../controllers/authorController");
const genre = require("../controllers/genreController");
const book_instance = require("../controllers/bookinstanceController");

/// BOOK ROUTES ///

// GET catalog home page.
router.get("/", book.index);

// requests for creating a Book.
//NOTE This must come before routes that display Book (uses id).
router.route("/book/create")
.get(book.create_get)
.post(book.create_post);

// requests to delete Book.
router.route("/book/:id/delete")
.get(book.delete_get)
.post(book.delete_post);

// requests to update Book.
router.route("/book/:id/update")
.get(book.update_get)
.post(book.update_post);

// GET request for one Book.
router.get("/book/:id", book.detail);

// GET request for list of all Book items.
router.get("/books", book.list);

/// AUTHOR ROUTES ///

// requests for creating Author.
// NOTE This must come before route for id (i.e. display author).
router.route("/author/create")
.get(author.create_get)
.post(author.create_post);

// requests to delete Author.
router.route("/author/:id/delete")
.get(author.delete_get)
.post(author.delete_post);

// GET request to update Author.
router.route("/author/:id/update")
.get(author.update_get)
.post(author.update_post);

// GET request for one Author.
router.get("/author/:id", author.detail);

// GET request for list of all Authors.
router.get("/authors", author.list);

/// GENRE ROUTES ///

// requests for creating a Genre.
// NOTE This must come before route that displays Genre (uses id).
router.route("/genre/create")
.get(genre.create_get)
.post(genre.create_post);

// GET request to delete Genre.
router.route("/genre/:id/delete")
.get(genre.delete_get)
.post(genre.delete_post);

// GET request to update Genre.
router.route("/genre/:id/update")
.get(genre.update_get)
.post(genre.update_post);

// GET request for one Genre.
router.get("/genre/:id", genre.detail);

// GET request for list of all Genre.
router.get("/genres", genre.list);

/// BOOKINSTANCE ROUTES ///

// requests for creating a BookInstance.
//NOTE This must come before route that displays BookInstance (uses id).
router.route("/bookinstance/create")
.get(book_instance.create_get)
.post(book_instance.create_post);

// requests to delete BookInstance.
router.route("/bookinstance/:id/delete")
.get(book_instance.delete_get)
.post(book_instance.delete_post);

// requests to update BookInstance.
router.route("/bookinstance/:id/update")
.get(book_instance.update_get)
.post(book_instance.update_post);

// GET request for one BookInstance.
router.get("/bookinstance/:id", book_instance.detail);

// GET request for list of all BookInstance.
router.get("/bookinstances", book_instance.list);


module.exports = router;
