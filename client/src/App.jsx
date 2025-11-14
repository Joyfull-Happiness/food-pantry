import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


export default function App() {
  return (
    <>
      <div>
        {/* below is the nav bar stored in the header linking the url to the name of pages that are linked to them. In the home and the savedcountries page we are using the text as the link buttons  */}
        <header>
          <nav>
            <Link to="/" className="homeHeader-link">
              Where in the world?
            </Link>

            <Link to="/SavedCountries" className="savedCountries-link">
              Saved Countries
            </Link>
          </nav>
        </header>
        {/* here i am wrapping everything in <Routes> so i can define all the paths in the app
         */}
        <Routes>
          {/* here i am setting the path for the homepage "/" so when the user visits it they see the Home component i'm also also passing the countries data into Home as a prop . I'm usuing a similar method fo the saved countries page route*/}
          <Route path="/" element={<Home countries={countries} />} />
          <Route
            path="/SavedCountries"
            element={<SavedCountries countries={countries} />}
          />
          {/* below i am making a dynamic route for a country detail page. the ":countryName" part is a parameter so when a countryName is clicked it gets shown
I am also rendering the CountryDetail component when that happens
  lastly i am passing the countries data AND the getCountriesData function into CountryDetail as props */}
          /*{" "}
          <Route
            path="/country-detail/:countryName"
            element={
              <CountryDetail
                countries={countries}
                getCountriesData={getCountriesData}
              />
            }
          />{" "}
        </Routes>
      </div>
    </>
  );

}
