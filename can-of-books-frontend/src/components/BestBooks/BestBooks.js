import React, { useEffect, useState } from "react";
import "./BestBooks.css";
import axios from "axios";
import AddBookButton from "../AddBookButton/AddBookButton";

export default function BestBooks({}) {
  const [books, setBooks] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  useEffect(() => {
    getBooks();
  }, []);

  function handleModal(form) {
    setModal(!modal);
    setModalContent(form);
    // console.log(modal);
  }

  function closeModal() {
    setModal(!modal);
    setModalContent({});
  }

  async function getBooks() {
    try {
      let API = `http://localhost:8888/books`;
      const result = await axios.get(API);
      console.log(result.data);
      setBooks([]);
      setBooks(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleAddBook = async (newBook) => {
    try {
      let API = `http://localhost:8888/books`;
      const result = await axios.post(API, newBook);
      console.log(result.data);
      setBooks([...books, result.data]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="books">
      <h2>Books</h2>
      <button onClick={handleModal}>Add Book</button>
      {modal && (
        <AddBookButton onSubmit={handleAddBook} closeModal={closeModal} />
      )}
      {/* <AddBookButton onSubmit={handleAddBook} /> */}
      {books.length === 0 ? (
        <p>There are no books</p>
      ) : (
        books.map((book) => {
          return (
            <div key={book._id}>
              <div>
                <h3 className="bookTitle">{book.title}</h3>
                <p className="bookDescription">{book.description}</p>
                <p className="bookStatus">{book.status}</p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
