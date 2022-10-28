const express = require("express");
const router = express.Router();

// Require controller modules.
const book_controller = require("../controllers/bookController");
const author_controller = require("../controllers/authorController");
const genre_controller = require("../controllers/genreController");
const book_instance_controller = require("../controllers/bookinstanceController");

/// BOOK ROUTES ///

// GET catalog home page.
router.get("/", book_controller.index);

// requests for creating a Book. NOTE This must come before routes that display Book (uses id).
router.route("/book/create")
.get(book_controller.book_create_get)
.post(book_controller.book_create_post);

// requests to delete Book.
router.route("/book/:id/delete")
.get(book_controller.book_delete_get)
.post(book_controller.book_delete_post);

// requests to update Book.
router.route("/book/:id/update")
.get(book_controller.book_update_get)
.post(book_controller.book_update_post);

// GET request for one Book.
router.get("/book/:id", book_controller.book_detail);

// GET request for list of all Book items.
router.get("/books", book_controller.book_list);

/// AUTHOR ROUTES ///

// requests for creating Author. NOTE This must come before route for id (i.e. display author).
router.route("/author/create")
.get(author_controller.author_create_get)
.post(author_controller.author_create_post);

// requests to delete Author.
router.route("/author/:id/delete")
.get(author_controller.author_delete_get)
.post(author_controller.author_delete_post);

// GET request to update Author.
router.route("/author/:id/update")
.get(author_controller.author_update_get)
.post(author_controller.author_update_post);

// GET request for one Author.
router.get("/author/:id", author_controller.author_detail);

// GET request for list of all Authors.
router.get("/authors", author_controller.author_list);

/// GENRE ROUTES ///

// requests for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.route("/genre/create")
.get(genre_controller.genre_create_get)
.post(genre_controller.genre_create_post);

// GET request to delete Genre.
router.route("/genre/:id/delete")
.get(genre_controller.genre_delete_get)
.post(genre_controller.genre_delete_post);

// GET request to update Genre.
router.route("/genre/:id/update")
.get(genre_controller.genre_update_get)
.post(genre_controller.genre_update_post);

// GET request for one Genre.
router.get("/genre/:id", genre_controller.genre_detail);

// GET request for list of all Genre.
router.get("/genres", genre_controller.genre_list);

/// BOOKINSTANCE ROUTES ///

// requests for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
router.route("/bookinstance/create")
.get(book_instance_controller.bookinstance_create_get)
.post(book_instance_controller.bookinstance_create_post);

// requests to delete BookInstance.
router.route("/bookinstance/:id/delete")
.get(book_instance_controller.bookinstance_delete_get)
.post(book_instance_controller.bookinstance_delete_post);

// requests to update BookInstance.
router.route("/bookinstance/:id/update")
.get(book_instance_controller.bookinstance_update_get)
.post(book_instance_controller.bookinstance_update_post);

// requests for one BookInstance.
router.route("/bookinstances")
.get(book_instance_controller.bookinstance_detail)
.get(book_instance_controller.bookinstance_list);

module.exports = router;
