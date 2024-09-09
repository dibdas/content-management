import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../redux/slices/contactSlice";
import { Link } from "react-router-dom";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.contacts);
  const dispatch = useDispatch();
  console.log("contacts", contacts);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Contacts List</h2>
      {contacts.length !== 0 ? (
        <ul className="space-y-4">
          {contacts.map((contact) => (
            <li
              key={contact.id}
              className="border border-gray-300 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                <p className="text-lg">
                  <strong className="font-semibold">First Name:</strong>{" "}
                  {contact.firstName}
                </p>
                <p className="text-lg">
                  <strong className="font-semibold">Last Name:</strong>{" "}
                  {contact.lastName}
                </p>
                <p className="text-lg">
                  <strong className="font-semibold">Status:</strong>{" "}
                  {contact.status}
                </p>
              </div>
              <div className="flex gap-2">
                <Link
                  to={`/edit/${contact.id}`}
                  className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors duration-300"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(contact.id)}
                  className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors duration-300"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No contacts found</p>
      )}
    </div>
  );
}
