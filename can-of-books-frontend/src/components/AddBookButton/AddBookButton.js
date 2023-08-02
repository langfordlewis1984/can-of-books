import React, { useState } from "react";
import "./AddBookButton.css";

export default function AddBookButton({ onSubmit, book, closeModal }) {
  const [formData, setFormData] = useState(
    book ?? {
      title: "",
      description: "",
      status: "",
    }
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const submit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    closeModal();
  };

  return (
    <div className="addBook">
      <form className="form" onSubmit={submit}>
        <input
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
        <button type="submit">{book ? "Update" : "Submit Book"}</button>
      </form>
    </div>
  );
}
