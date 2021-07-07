import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const container = render(<CheckoutForm />);

    const formHeader = container.getByText(/checkout form/i);
    expect(formHeader.textContent).toBe("Checkout Form");
});

test("form shows success message on submit with form details", () => {
    const container = render(<CheckoutForm />);

    fireEvent.change(container.getByLabelText("First Name:"), {target: {value: "Mannie"}});
    fireEvent.change(container.getByLabelText("Last Name:"), {target: {value: "Alvarez"}});    fireEvent.change(container.getByLabelText("Address:"), {target: {value: "124 Main Street"}});
    fireEvent.change(container.getByLabelText("City:"), {target: {value: "Somewhere in the"}});
    fireEvent.change(container.getByLabelText("State:"), {target: {value: "World"}});
    fireEvent.change(container.getByLabelText("Zip:"), {target: {value: "54321"}});

    const submitButton = container.getByTestId("submitButton");

    fireEvent.click(submitButton);

    const successMessage = container.getByTestId("successMessage");
    console.log("cea: CheckoutForm.test.js: successMessage test: message: ", successMessage.textContent);
});
