import React, { useState } from "react";
import useForm from "../hooks/useForm";

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {  
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, handleChange] = useForm(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();

    if( values.firstName && 
        values.lastName && 
        values.address && 
        values.city && 
        values.state && 
        values.zip ) setShowSuccessMessage(true);
};

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label htmlFor = "firstName">
          First Name:
          <input
            id = "firstName"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor = "lastName">
          Last Name:
          <input
            id = "lastName"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor = "address">
          Address:
          <input
            id = "address"
            name="address"
            value={values.address}
            onChange={handleChange}
          />
        </label>
        <label htmlFor = "city">
          City:
          <input id = "city" name="city" value={values.city} onChange={handleChange} />
        </label>
        <label htmlFor = "state">
          State:
          <input id = "state" name="state" value={values.state} onChange={handleChange} />
        </label>
        <label htmlFor = "zip">
          Zip:
          <input id = "zip" name="zip" value={values.zip} onChange={handleChange} />
        </label>
        <button data-testid = "submitButton">Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img" aria-label = "party horn icon">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {values.firstName} {values.lastName}
          </p>
          <p>{values.address}</p>
          <p>
            {values.city}, {values.state} {values.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
