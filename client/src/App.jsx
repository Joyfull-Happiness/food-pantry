import "./App.css";
import Home from "./Pages/Home";
import Form from "./Components/Form";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

import Header from "/";

export default function App() {
  return (
    <>
      <div>
        <Header navbarSpot={<Navbar />} />
        <Home />
        <Footer />
      </div>
    </>
  );
}
