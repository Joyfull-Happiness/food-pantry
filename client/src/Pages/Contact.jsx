import React from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <div className="container">
        <Header />

        <main className="help-us-page">
          <section className="help-us-intro">
            <h1>Help Us Keep Food Bank Information Up To Date</h1>
            <p>
              Use this page to register your food bank or update information so
              your community can find accurate, current resources.
            </p>
          </section>

          <section className="help-us-steps">
            <h2>How You Can Help</h2>
            <ol>
              <li>
                <strong>Step 1:</strong> Go to the{" "}
                <a href="/" className="inline-link">
                  Food Bank Search
                </a>{" "}
                page and type your food bank’s name into the search bar to check
                if it's already registered.
              </li>
              <li>
                <strong>Step 2:</strong> If it's not listed, fill out the form
                below.
              </li>
            </ol>
          </section>
          {/* omment */}
          <section className="contact-card">
            <form className="contact-form">
              <h2>Register Your Food Bank</h2>
              <fieldset className="food-bank-details">
                <legend>Food Bank Information</legend>

                <label htmlFor="foodBankName">Food Bank Name</label>
                <input
                  id="foodBankName"
                  name="foodBankName"
                  type="text"
                  required
                />

                <label htmlFor="foodBankWebsite">Food Bank Website</label>
                <input id="foodBankWebsite" name="foodBankWebsite" type="url" />

                <label htmlFor="foodBankEmail">Food Bank Email</label>
                <input
                  id="foodBankEmail"
                  name="foodBankEmail"
                  type="email"
                  required
                />

                <label htmlFor="foodBankAddress">Food Bank Address</label>
                <textarea
                  id="foodBankAddress"
                  name="foodBankAddress"
                  rows={3}
                  required
                ></textarea>
              </fieldset>

              <fieldset className="submitter-details">
                <legend>Your Information</legend>

                <label htmlFor="submitterName">Your Full Name</label>
                <input
                  id="submitterName"
                  name="submitterName"
                  type="text"
                  required
                />

                <label htmlFor="submitterEmail">Your Email</label>
                <input
                  id="submitterEmail"
                  name="submitterEmail"
                  type="email"
                  required
                />

                <label htmlFor="submitterRole">
                  Your Role / How You Collected This Info
                </label>
                <input id="submitterRole" name="submitterRole" type="text" />
              </fieldset>

              <div className="newsletter-consent">
                <input
                  id="newsletterConsent"
                  name="newsletterConsent"
                  type="checkbox"
                  defaultChecked
                />
                <label htmlFor="newsletterConsent">
                  I agree to be added to the newsletter and food bank directory.
                </label>
              </div>
              <p>
                *By submitting this form, you agree to join our newsletter and
                allow your food bank’s information to be added to our directory.
              </p>
              <button type="submit" className="submit-button">
                Submit Food Bank Information
              </button>
            </form>
          </section>
        </main>
      </div>
    </>
  );
}
