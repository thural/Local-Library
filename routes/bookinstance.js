const express = require("express");
const router = express.Router();

// Require controller module.
const bookinstance = require("../controllers/bookinstance");

// requests for creating a BookInstance.
// NOTE This must come before route that displays BookInstance (uses id).
router.route("/create")
.get(bookinstance.create_get)
.post(bookinstance.create_post);

// requests to delete BookInstance.
router.route("/:id/delete")
.get(bookinstance.delete_get)
.post(bookinstance.delete_post);

// requests to update BookInstance.
router.route("/:id/update")
.get(bookinstance.update_get)
.post(bookinstance.update_post);

// GET request for one BookInstance.
router.get("/:id", bookinstance.detail);

// GET request for list of all BookInstance.
router.get("/", bookinstance.list);

module.exports = router;
