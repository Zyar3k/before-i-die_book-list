const Book = require("../models/Book");
const { StatusCodes } = require("http-status-codes");
const { NotFoundError } = require("../errors");

const getAllBooks = async (req, res) => {
  const books = await Book.find().sort("createdAt");
  res.status(StatusCodes.OK).json(books);
};

const getBook = async (req, res) => {
  const {
    //   user: { userId }, // optional, later
    params: { id: bookId },
  } = req;

  const book = await Book.findOne({ _id: bookId });
  if (!book) {
    throw new NotFoundError(`Book with id ${bookId} not found`);
  }
  res.status(StatusCodes.OK).json({ book });
};

const createBook = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const book = await Book.create(req.body);
  res.status(StatusCodes.CREATED).json({ book });
};

const updateBook = async (req, res) => {
  res.send("update Book");
};

const deleteBook = async (req, res) => {
  res.send("delete Book");
};

module.exports = {
  getAllBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
