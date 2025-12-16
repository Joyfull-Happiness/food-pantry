import React from "react";
import "./FormPage.css";
import Form from "../Components/Form";

export default function FormPage() {
  return (
    <div className="container">
      <section className="help-us-steps">
        <h2>How You Can Help</h2>
        <ol>
          <li>
            <strong>Step 1:</strong> Go to the{" "}
            <a href="/" className="inline-link">
              Food Bank Search
            </a>{" "}
            page and type your food bank’s name into the search bar to check if
            it's already registered.
          </li>
          <li>
            <strong>Step 2:</strong> If it's not listed, fill out the form
            below.
          </li>
        </ol>
        <div className="inventory-right">
          <div className="inventory-card">
            <img
              src="../public/images/pexels-rdne-6646916.jpg"
              alt="Food Bank"
              className="inventory-image"
            />

            {/* Optional floating badges */}
            <div className="inventory-badge badge-top-left">🍎 Fresh Food</div>
            <div className="inventory-badge badge-top-right">🌱 Healthy</div>
          </div>
        </div>
      </section>
      {/* omment */}
      <Form />
    </div>
  );
}
//comment here
