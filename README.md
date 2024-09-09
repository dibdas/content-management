#Contact Management Application
This is a Contact Management Application built using React, Redux, React Router, Tailwind CSS, Tanstack Query (React Query), and React-Leaflet. The application allows users to manage contacts, visualize data on a map, and display charts related to COVID-19 data. It also provides CRUD functionality for contacts.

Features
Create, Update, and Delete Contacts: A fully functional contact management system.
COVID-19 Dashboard: Includes a map displaying COVID-19 data across countries and a chart showing case trends over time.
Responsive Design: Built with Tailwind CSS for responsiveness across all devices.
Interactive Map: COVID-19 data is displayed on a map using React-Leaflet.
Charts: Data visualization with charts using Chart.js and React-Chartjs-2.

Project Structure

/src
/components - ContactForm.js - ContactList.js - EditContact.js - CasesChart.js - CovidMap.js
/redux
/slices - contactSlice.js - store.js
/App.js
/index.js
/App.css
/redux
/assets
Components
ContactForm: Allows users to add new contacts.
ContactList: Displays a list of contacts with options to edit or delete.
EditContact: A form for editing contact information.
CasesChart: Line chart displaying COVID-19 case trends.
CovidMap: Interactive map showing COVID-19 data with country flags.
State Management
Redux is used to manage the application’s state, particularly the contact list. The contactSlice handles actions like adding, editing, and deleting contacts.
Data Fetching
Tanstack Query (React Query) is used to fetch COVID-19 data from the disease.sh API.
Axios is used to make HTTP requests.
Prerequisites
Make sure you have the following installed on your machine:

Node.js (v14 or higher)
npm or Yarn
Getting Started

1. Clone the repository
   bash
   Copy code
   git clone https://github.com/your-username/contact-management-app.git
   cd contact-management-app
2. Install dependencies
   If you are using npm:

npm install

Run the following command to start the React development server:

npm start

This will start the application in development mode. Open http://localhost:3000 to view it in the browser.

Deployment

https://content-management-mu-sooty.vercel.app/

Technologies Used
React: JavaScript library for building user interfaces.
Redux: State management.
React Router: For client-side routing.
Tanstack Query (React Query): For data fetching and caching.
Axios: For making API requests.
Tailwind CSS: Utility-first CSS framework.
React-Leaflet: Map rendering library based on Leaflet.js.
Chart.js: For rendering charts.
License
This project is licensed under the MIT License. See the LICENSE file for more details.
