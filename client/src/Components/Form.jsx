import { useState } from "react";
import "./FoodForm.css";

const initialFormValues = {
  userFullName: "",
  userEmailAddress: "",
  userPhoneNumber: "",
  organizationName: "",
  organizationWebsite: "",
  organizationHours: "",
  organizationBio: "",
  foodBankName: "",
  foodBankAddressLineOne: "",
  foodBankCity: "",
  foodBankState: "",
  foodBankZipCode: "",
  accountPassword: "",
};

const initialFoodItems = {
  isProduce: false,
  isPerishable: false,
  isVegetarian: false,
  isVegan: false,
  isKeto: false,
  isGlutenFree: false,
  isHalal: false,
  isKosher: false,
  isBabyFood: false,
};

function Form() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [foodItemTypes, setFoodItemTypes] = useState(initialFoodItems);
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((previousValues) => ({
      ...previousValues,
      [name]: value,
    }));
  };

  const handleFoodItemChange = (event) => {
    const { name, checked } = event.target;
    setFoodItemTypes((previousFoodItemTypes) => ({
      ...previousFoodItemTypes,
      [name]: checked,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formValues.userFullName.trim())
      newErrors.userFullName = "Full name is required.";
    if (!formValues.userEmailAddress.trim())
      newErrors.userEmailAddress = "Email address is required.";
    if (!formValues.userPhoneNumber.trim())
      newErrors.userPhoneNumber = "Phone number is required.";

    if (!formValues.organizationHours.trim())
      newErrors.organizationHours = "Hours are required.";
    if (!formValues.foodBankName.trim())
      newErrors.foodBankName = "Food bank name is required.";
    if (!formValues.foodBankAddressLineOne.trim())
      newErrors.foodBankAddressLineOne = "Address line is required.";
    if (!formValues.foodBankCity.trim())
      newErrors.foodBankCity = "City is required.";
    if (!formValues.foodBankState.trim())
      newErrors.foodBankState = "State is required.";
    if (!formValues.foodBankZipCode.trim())
      newErrors.foodBankZipCode = "Zip code is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    const isFormValid = validateForm();
    if (!isFormValid) {
      event.preventDefault();
    }
  };

  return (
    <form
      action="https://formspree.io/f/mqavkyzr"
      method="POST"
      className="signup-form"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="userFullNameInput">Full Name</label>
        <input
          id="userFullNameInput"
          name="userFullName"
          type="text"
          value={formValues.userFullName}
          onChange={handleInputChange}
          placeholder="Your full name"
        />
        {errors.userFullName && <p>{errors.userFullName}</p>}
      </div>

      <div>
        <label htmlFor="userEmailAddressInput">Your Email</label>
        <input
          id="userEmailAddressInput"
          name="userEmailAddress"
          type="email"
          value={formValues.userEmailAddress}
          onChange={handleInputChange}
          placeholder="you@example.org"
        />
        {errors.userEmailAddress && <p>{errors.userEmailAddress}</p>}
      </div>

      <div>
        <label htmlFor="foodBankNameInput">Name of Food Bank</label>
        <input
          id="foodBankNameInput"
          name="foodBankName"
          type="text"
          value={formValues.foodBankName}
          onChange={handleInputChange}
          placeholder="Name of the food bank"
        />
        {errors.foodBankName && <p>{errors.foodBankName}</p>}
      </div>

      <div>
        <label htmlFor="userPhoneNumberInput">Food Bank Phone Number</label>
        <input
          id="userPhoneNumberInput"
          name="userPhoneNumber"
          type="tel"
          value={formValues.userPhoneNumber}
          onChange={handleInputChange}
          placeholder="Example: 470-555-1234"
        />
        {errors.userPhoneNumber && <p>{errors.userPhoneNumber}</p>}
      </div>

      <div>
        <label htmlFor="organizationWebsiteInput">Food Bank Website</label>
        <input
          id="organizationWebsiteInput"
          name="organizationWebsite"
          type="url"
          value={formValues.organizationWebsite}
          onChange={handleInputChange}
          placeholder="https://example.org"
        />
      </div>

      <div>
        <label htmlFor="organizationHoursInput">Hours of Operation</label>
        <input
          id="organizationHoursInput"
          name="organizationHours"
          type="text"
          value={formValues.organizationHours}
          onChange={handleInputChange}
          placeholder="Mon–Fri 9am–5pm"
        />
        {errors.organizationHours && <p>{errors.organizationHours}</p>}
      </div>

      <div>
        <label htmlFor="organizationBioInput">Food Bank Bio</label>
        <textarea
          id="organizationBioInput"
          name="organizationBio"
          value={formValues.organizationBio}
          onChange={handleInputChange}
          placeholder="Brief description of your organization"
          rows={3}
        />
      </div>

      <div>
        <label htmlFor="foodBankAddressLineOneInput">
          Food Bank Address (Line 1)
        </label>
        <input
          id="foodBankAddressLineOneInput"
          name="foodBankAddressLineOne"
          type="text"
          value={formValues.foodBankAddressLineOne}
          onChange={handleInputChange}
          placeholder="Street address"
        />
        {errors.foodBankAddressLineOne && (
          <p>{errors.foodBankAddressLineOne}</p>
        )}
      </div>

      <div>
        <label htmlFor="foodBankCityInput">City</label>
        <input
          id="foodBankCityInput"
          name="foodBankCity"
          type="text"
          value={formValues.foodBankCity}
          onChange={handleInputChange}
          placeholder="City"
        />
        {errors.foodBankCity && <p>{errors.foodBankCity}</p>}
      </div>

      <div>
        <label htmlFor="foodBankStateInput">State</label>
        <input
          id="foodBankStateInput"
          name="foodBankState"
          type="text"
          value={formValues.foodBankState}
          onChange={handleInputChange}
          placeholder="State"
        />
        {errors.foodBankState && <p>{errors.foodBankState}</p>}
      </div>

      <div>
        <label htmlFor="foodBankZipCodeInput">Zip</label>
        <input
          id="foodBankZipCodeInput"
          name="foodBankZipCode"
          type="text"
          value={formValues.foodBankZipCode}
          onChange={handleInputChange}
          placeholder="Zip code"
        />
        {errors.foodBankZipCode && <p>{errors.foodBankZipCode}</p>}
      </div>

      <fieldset>
        <legend>
          What food items do you regularly have? (check all that apply)
        </legend>

        <label>
          <input
            type="checkbox"
            name="isProduce"
            checked={foodItemTypes.isProduce}
            onChange={handleFoodItemChange}
          />
          Produce
        </label>

        <label>
          <input
            type="checkbox"
            name="isPerishable"
            checked={foodItemTypes.isPerishable}
            onChange={handleFoodItemChange}
          />
          Perishable
        </label>

        <label>
          <input
            type="checkbox"
            name="isVegetarian"
            checked={foodItemTypes.isVegetarian}
            onChange={handleFoodItemChange}
          />
          Vegetarian
        </label>

        <label>
          <input
            type="checkbox"
            name="isVegan"
            checked={foodItemTypes.isVegan}
            onChange={handleFoodItemChange}
          />
          Vegan
        </label>

        <label>
          <input
            type="checkbox"
            name="isKeto"
            checked={foodItemTypes.isKeto}
            onChange={handleFoodItemChange}
          />
          Keto
        </label>

        <label>
          <input
            type="checkbox"
            name="isGlutenFree"
            checked={foodItemTypes.isGlutenFree}
            onChange={handleFoodItemChange}
          />
          Gluten-free
        </label>

        <label>
          <input
            type="checkbox"
            name="isHalal"
            checked={foodItemTypes.isHalal}
            onChange={handleFoodItemChange}
          />
          Halal
        </label>

        <label>
          <input
            type="checkbox"
            name="isKosher"
            checked={foodItemTypes.isKosher}
            onChange={handleFoodItemChange}
          />
          Kosher
        </label>

        <label>
          <input
            type="checkbox"
            name="isBabyFood"
            checked={foodItemTypes.isBabyFood}
            onChange={handleFoodItemChange}
          />
          Baby food
        </label>
      </fieldset>
      <p>
        *By submitting this form, you agree to join our newsletter and allow
        your food bank’s information to be added to our directory.
      </p>

      <button type="submit">Submit Your Food Banks Info</button>
    </form>
  );
}

export default Form;
