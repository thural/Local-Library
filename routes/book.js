const express = require("express");
const router = express.Router();

// Require controller module.
const book = require("../controllers/book");

// requests for creating a Book.
//NOTE This must come before routes that display Book (uses id).
router.route("/create")
.get(book.create_get)
.post(book.create_post);

// requests to delete Book.
router.route("/:id/delete")
.get(book.delete_get)
.post(book.delete_post);

// requests to update Book.
router.route("/:id/update")
.get(book.update_get)
.post(book.update_post);

// GET request for one Book.
router.get("/:id", book.detail);

// GET request for list of all Book items.
router.get("/", book.list);

module.exports = router