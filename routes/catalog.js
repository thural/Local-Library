const express = require("express");
const router = express.Router();

// Require controller modules.
const book = require("../controllers/book");

// GET catalog home page.
router.get("/", book.index);

module.exports = router;
