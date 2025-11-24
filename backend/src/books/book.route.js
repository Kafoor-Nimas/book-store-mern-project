const express = require("express");
const Book = require("./book.model");

const router = express.Router();

//post a book
router.post("/create-book", async (req, res) => {
  try {
    const newBook = await Book({ ...req.body });
    await newBook.save();
    res
      .status(200)
      .send({ message: "Book posted  successfully", book: newBook });
  } catch (error) {
    console.error("Error creating book", error);
    res.status(500).send({ message: "Failed to create book" });
  }
});

module.exports = router;
