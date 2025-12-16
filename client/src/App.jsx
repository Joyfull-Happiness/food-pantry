import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home.jsx";
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
}

export default App;
