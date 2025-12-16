import "./App.css";
import Home from "./Pages/Home.jsx";
<<<<<<< HEAD
import SavedCountries from "./Pages/SavedCountries.jsx";
// import localData from "../../localData.js";
import React, { useState, useEffect } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  //Below we are creating the variable getCountriesData to retreave the country data from the api
  const getCountriesData = async () => {
    try {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region,cca3,borders"
      );
      const data = await response.json();
      console.log("data from API", data);
      setCountries(data);
    } catch (error) {
      console.log("Error: " + error.message);
    }
  };
  // Here i am sorting the countries by the "common" name in alphabetical order
  // becuase we are sorting through the countries array this becomes are main variable needed for the .sort method to run (can't be done will all methods, .sort is one othe exceptions (the technical term for this is muttation meaning the original array is changed))
  const sortedCountries = countries.sort((firstCountry, secondCountry) =>
    firstCountry.name.common > secondCountry.name.common ? 1 : -1
  );
  // we run useEffect when the page loads
  // it has an empty dependency array, meaning no dependencies, but we still have to include because it's required useEffect syntax

  // below is the useEffect that will show the getCountriesData on page load
  useEffect(() => {
    getCountriesData();
  }, []);

  return <></>;
=======
import About from "./Pages/About.jsx";
import FormPage from "./Pages/FormPage.jsx";
import InventoryPage from "./Pages/InventoryPage.jsx";
import Contact from "./Pages/Contact.jsx";
import { Header } from "./Components/Header.jsx";
import { Footer } from "./Components/Footer.jsx";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
export default function App() {
  return (
    <>
      <div>
        <nav>
          <ul className="navBar">
            <li>
              <img
                className="navbar-logo"
                style={{ height: "50px" }}
                src="images/logo5.svg"
                alt="Shelves stocked with specialized food items"
              />
            </li>
            <li>
              <Link to="/">
                <h2 style={{}}>Home</h2>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <h2 style={{}}>About</h2>
              </Link>
            </li>
            <li>
              <Link to="/form">
                <h2 style={{}}>Contact Us</h2>
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/food-bank-inventory" element={<InventoryPage />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Header />
        <Footer />
      </div>
    </>
  );
>>>>>>> d1a5c16ae3a3de667c8e1764813ec55177efa0be
}
