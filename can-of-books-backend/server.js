const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bp = require("body-parser");

require("dotenv").config();

const PORT = process.env.PORT || 8888;

const app = express();
app.use(cors());
app.use(bp.json());

const Book = require("./models/book");
mongoose.connect(process.env.DATABASE_URL);

app.get("/", (request, response) => {
  response.status(200).json("It's aliiiiiive");
});

//CREATE / ADD
app.post("/books", async (request, response) => {
  try {
    const newBook = await Book.create(request.body);
    response.status(200).json(newBook);
  } catch (error) {
    response.status(500).json(error);
  }
});

//READ
app.get("/books", async (request, response) => {
  try {
    const allBooks = await Book.find(request.query);
    response.status(200).json(allBooks);
  } catch (error) {
    response.status(404).json(error);
  }
});

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
