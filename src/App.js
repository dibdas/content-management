import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import CasesChart from "./components/CasesChart";
import CovidMap from "./components/CovidMap";
import EditContact from "./components/EditContact";

function App() {
  return (
    <div className="flex h-screen">
      {/* Vertical Navigation */}
      <nav className="w-1/8 bg-blue-500 text-white p-4 flex flex-col items-start">
        <Link
          to="/"
          className="mb-4 p-2 border border-white rounded hover:bg-blue-400 transition-colors"
        >
          Contact Form
        </Link>
        <Link
          to="/contactlist"
          className="mb-4 p-2 border border-white rounded hover:bg-blue-400 transition-colors"
        >
          Contact List
        </Link>
        <Link
          to="/dashboard"
          className="mb-4 p-2 border border-white rounded hover:bg-blue-400 transition-colors"
        >
          Dashboard
        </Link>
      </nav>

      {/* Main Content and Routes */}
      <main className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<ContactForm />} />
          <Route path="/contactlist" element={<ContactList />} />
          <Route path="/edit/:id" element={<EditContact />} />
          <Route
            path="/dashboard"
            element={
              <div>
                <h1 className="text-xl mb-4">COVID-19 Dashboard</h1>
                <CasesChart />
                <CovidMap />
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
