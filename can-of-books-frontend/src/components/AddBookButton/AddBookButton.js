import React, { useState } from "react";
import "./AddBookButton.css";

export default function AddBookButton({ handleAddBook, book, closeModal }) {
  const [formData, setFormData] = useState(
    book ?? {
      title: "",
      description: "",
      status: "",
    }
  );

  // Dealing with FORM DATA
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submit = (event) => {
    event.preventDefault();
    handleAddBook(formData);
    closeModal();
  };

  return (
    <div className="modalBackground">
      <div className="addBook">
        <form className="form" onSubmit={submit}>
          <legend className="formLegend">Add New Book</legend>
          <input
            required
            name="title"
            placeholder="enter title of book"
            onChange={handleChange}
            value={formData.title}
          ></input>
                    <textarea className="description" name="description" wrap="soft" placeholder="enter book description" onChange={handleChange} value={formData
          .description
          }></textarea>
          <input
            name="status"
            placeholder="what is the status?"
            onChange={handleChange}
            value={formData.status}
          ></input>
          <button className="submitButton" type="submit">
            {book ? "Update" : "Submit Book"}
          </button>
          <button className="closeModal" onClick={closeModal}>
            X
          </button>
        </form>
      </div>
    </div>
  );
}
