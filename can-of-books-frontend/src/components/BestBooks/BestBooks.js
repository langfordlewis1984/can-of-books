import React, { useEffect, useState } from "react";
import "./BestBooks.css";
import axios from "axios";
import AddBookButton from "../AddBookButton/AddBookButton";
import BooksCarousel from "../../components/BooksCarousel/BooksCarousel";

export default function BestBooks() {
  const [books, setBooks] = useState([]);
  const [modal, setModal] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);

  useEffect(() => {
    getBooks();
  }, []);

  function handleModal(form) {
    setModal(!modal);
  }

  function closeModal() {
    setModal(!modal);
  }

  //READ
  async function getBooks() {
    try {
      let API = `http://localhost:8888/books`;
      const result = await axios.get(API);
      setBooks([]);
      setBooks(result.data);
      setDisabledButton(false);
    } catch (error) {
      console.log(error);
    }
  }

  //CREATE
  const handleAddBook = async (newBook) => {
    try {
      let API = `http://localhost:8888/books`;
      const result = await axios.post(API, newBook);
      setBooks([...books, result.data]);
    } catch (error) {
      console.log(error);
    }
  };

  //DELETE
  const deleteBook = async (id) => {
    await axios.delete(`http://localhost:8888/books/${id}`);
    getBooks();
  };

  const handleButtonClick = () => {
    setDisabledButton(true);
  };

  //UPDATE
  const handleUpdateBook = async (book) => {
    await axios.put(`http://localhost:8888/books/${book._id}`, book);
    getBooks();
  };

  return (
    <div className="books">
      <h2>Books</h2>
      <BooksCarousel
        books={books}
        deleteBookButton={deleteBook}
        handleButtonClick={handleButtonClick}
        disabledButton={disabledButton}
        handleModal={handleModal}
        handleUpdateBook={handleUpdateBook}
        modal={modal}
        closeModal={closeModal}
      />

      <button className="addButton" onClick={handleModal}>
        Add Book
      </button>
      {modal && (
        <AddBookButton handleAddBook={handleAddBook} closeModal={closeModal} />
      )}
    </div>
  );
}
