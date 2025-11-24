const express = require("express");
const Book = require("./book.model");
const { postBook } = require("./book.controller");

const router = express.Router();

//post a book
router.post("/create-book", postBook);

// get all books

module.exports = router;
