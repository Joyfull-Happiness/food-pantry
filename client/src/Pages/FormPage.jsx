import React from "react";
import { Navbar } from "../Components/Navbar";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

export default function FormPage() {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <body>
        <h1> Food Banks Sign Up </h1>
        <Form />
      </body>
      <Footer />
    </div>
  );
}
//comment here
