import React, { useState } from "react";
import "./BooksCarousel.css";
import { useSnapCarousel } from "react-snap-carousel";
import AddBookButton from "../AddBookButton/AddBookButton";
import BookDetails from "../BookDetails/BookDetails";

export default function BooksCarousel({
  books,
  deleteBookButton,
  handleButtonClick,
  disabledButton,
  handleUpdateBook,
  closeModal,
}) {
  const [modal2, setModal2] = useState(false);
  const [modalContent2, setModalContent2] = useState({});

  const { scrollRef, pages, activePageIndex, next, prev, goTo } =
    useSnapCarousel();

  function handleModal2(form) {
    setModal2(!modal2);
    setModalContent2(form);
  }

  function closeModal2() {
    setModal2(!modal2);
    setModalContent2({});
  }

  function updateBook(form) {
    console.log("Updating Book placeholder");
    console.log(modal2);
    handleModal2();
    setModalContent2(form);
  }

  return (
    <>
      <ul ref={scrollRef} className="scrool">
        {books.map((book, _id) => (
          <li key={_id} className="bookLi">
            <h3 className="bookTitle">{book.title}</h3>
            <p className="bookDescription">{book.description}</p>
            <p className="bookStatus">{book.status}</p>
            <div className="bookOptions">
              <button className="updateButton" onClick={updateBook}>
                Update
              </button>
              <button
                disabled={disabledButton}
                className="deleteButton"
                onClick={() => deleteBookButton(book._id) + handleButtonClick()}
              >
                Delete
              </button>
              {modal2 && (
                <BookDetails
                  handleUpdateBook={handleUpdateBook}
                  book={book}
                  closeModal2={closeModal2}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
      <button className="prevButton" onClick={() => prev()}>
        Prev
      </button>
      <button className="nextButton" onClick={() => next()}>
        Next
      </button>
      <ol style={{ display: "flex" }}>
        {pages.map((_, i) => (
          <li key={i}>
            <button
              className="pageNum"
              style={i === activePageIndex ? { opacity: 0.5 } : {}}
              onClick={() => goTo(i)}
            >
              {i + 1}
            </button>
          </li>
        ))}
      </ol>
    </>
  );
}
