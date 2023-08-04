import React, { useState } from "react";
import "./BookDetails.css";

export default function BookDetails({ handleUpdateBook, book, closeModal2,modalContent2 }) {
  const [formData, setFormData] = useState(modalContent2);

  // Dealing with FORM DATA
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submit = (event) => {
    event.preventDefault();
    handleUpdateBook(formData);
    closeModal2();
  };

  return (
    <div className="modalBackground">
      <div className="addBook">
        <form className="form" onSubmit={submit}>
          <legend className="formLegend">Update Book</legend>
          <input
            required
            id="title"
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
            {book ? "Update" : "Edit Book"}
          </button>
          <button className="closeModal" onClick={closeModal2}>
            X
          </button>
        </form>
      </div>
    </div>
  );
}
