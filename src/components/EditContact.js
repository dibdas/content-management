import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editContact } from "../redux/slices/contactSlice";
const EditContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const contacts = useSelector((state) => state.contacts.contacts);
  const contact = contacts.find((contact) => contact.id === parseInt(id));
  const dispatch = useDispatch();
  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    status: "active",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editContact(contactData));
    navigate("/contactlist");
  };

  // Populate the state with contact data when the component loads
  useEffect(() => {
    if (contact) {
      setContactData(contact);
    }
  }, [contact]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  return (
    <div className="p-4">
      <h2>Edit Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block">Name</label>
          <input
            type="text"
            name="firstName"
            value={contactData.firstName}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block">Email</label>
          <input
            type="text"
            name="lastName"
            value={contactData.lastName}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block">Status</label>
          <select
            name="status"
            value={contactData.status}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2">
          Update Contact
        </button>
      </form>
    </div>
  );
};

export default EditContact;
