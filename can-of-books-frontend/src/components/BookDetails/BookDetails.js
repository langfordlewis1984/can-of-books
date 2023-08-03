import React, { useState } from "react";
import "./BookDetails.css";

export default function BookDetails({ handleUpdateBook, book, closeModal2 }) {
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
    console.log(formData);
  };

  const submit = (event) => {
    event.preventDefault();
    handleUpdateBook(formData);
    closeModal2();
  };

  return (
    <div className="addBook">
      <form className="form" onSubmit={submit}>
        <legend className="formLegend">Update Book</legend>
        <input
          required
          name="title"
          placeholder="enter title of book"
          onChange={handleChange}
          value={formData.title}
        ></input>
        <input
          name="description"
          placeholder="enter book description"
          onChange={handleChange}
          value={formData.description}
        ></input>
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
  );
}
