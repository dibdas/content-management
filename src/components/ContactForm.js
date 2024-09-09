import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/slices/contactSlice";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("active");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ id: Date.now(), firstName, lastName, status }));
    setFirstName("");
    setLastName("");
    setStatus("active");
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">
            First Name:
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter first name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter last name"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2">Status:</label>
          <div className="flex items-center space-x-6">
            <label className="flex items-center">
              <input
                type="radio"
                name="status"
                value="active"
                checked={status === "active"}
                onChange={() => setStatus("active")}
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-sm">Active</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="status"
                value="inactive"
                checked={status === "inactive"}
                onChange={() => setStatus("inactive")}
                className="form-radio h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-sm">Inactive</span>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-3 rounded-lg w-full hover:bg-blue-600 transition-colors duration-300"
        >
          Add Contact
        </button>
      </form>
    </div>
  );
}
