// /src/App.jsx

import React, { useState, useEffect } from 'react';
import Home from "./Pages/Home";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";


export default function App() {
  return (
    // The App component renders your Home component
    // If you had a Router here, you would temporarily comment it out too.
    <Home />
  );

}

