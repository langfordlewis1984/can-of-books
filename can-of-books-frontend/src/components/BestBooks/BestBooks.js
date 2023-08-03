import React, { useEffect, useState } from "react";
import "./BestBooks.css";
import axios from "axios";
import AddBookButton from "../AddBookButton/AddBookButton";
import BooksCarousel from "../../components/BooksCarousel/BooksCarousel";

export default function BestBooks() {
  const [books, setBooks] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [disabledButton, setDisabledButton] = useState(false);

  useEffect(() => {
    getBooks();
  }, []);

  function handleModal(form) {
    setModal(!modal);
    setModalContent(form);
  }

  function closeModal() {
    setModal(!modal);
    setModalContent({});
  }

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

  const handleAddBook = async (newBook) => {
    try {
      let API = `http://localhost:8888/books`;
      const result = await axios.post(API, newBook);
      setBooks([...books, result.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBook = async (id) => {
    const result = await axios.delete(`http://localhost:8888/books/${id}`);
    getBooks();
  };

  const handleButtonClick = () => {
    setDisabledButton(true);
  };

  return (
    <div className="books">
      <h2>Books</h2>
      <BooksCarousel
        books={books}
        deleteBookButton={deleteBook}
        handleButtonClick={handleButtonClick}
        disabledButton={disabledButton}
      />

      <button className="addButton" onClick={handleModal}>
        Add Book
      </button>
      {modal && (
        <AddBookButton onSubmit={handleAddBook} closeModal={closeModal} />
      )}
    </div>
  );
}
