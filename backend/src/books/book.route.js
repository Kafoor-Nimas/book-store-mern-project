const express = require("express");
const Book = require("./book.model");
const {
  postBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
} = require("./book.controller");
const verifyAdminToken = require("../middleware/verifyAdminToken");

const router = express.Router();

//post a book
router.post("/create-book", verifyAdminToken, postBook);

// get all books
router.get("/", getAllBooks);

//get single book endpoint
router.get("/:id", getSingleBook);

//update a book endpoint
router.put("/edit/:id", updateBook);

//delete a book endpoint
router.delete("/:id", deleteBook);

module.exports = router;
