const express = require("express");
const router = express.Router();

// Require controller module.
const author = require("../controllers/author");

// requests for creating Author.
// NOTE This must come before route for id (i.e. display author).
router.route("/create")
.get(author.create_get)
.post(author.create_post);

// requests to delete Author.
router.route("/:id/delete")
.get(author.delete_get)
.post(author.delete_post);

// requests to update Author.
router.route("/:id/update")
.get(author.update_get)
.post(author.update_post);

// GET request for one Author.
router.get("/:id", author.detail);

// GET request for list of all Authors.
router.get("/", author.list);

module.exports = router