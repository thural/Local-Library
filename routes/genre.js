const express = require("express");
const router = express.Router();

// Require controller module.
const genre = require("../controllers/genre");


// GET request for list of all Genres.
router.get("/", genre.list);

// GET request for one Genre.
router.get("/:id", genre.detail);

// requests for creating a Genre.
// NOTE This must come before route that displays Genre (uses id).
router.route("/create")
.get(genre.create_get)
.post(genre.create_post);

// requests to delete Genre.
router.route("/:id/delete")
.get(genre.delete_get)
.post(genre.delete_post);

// requests to update Genre.
router.route("/:id/update")
.get(genre.update_get)
.post(genre.update_post);

module.exports = router