import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import ShoppingCart from "./ShoppingCart";

const plants = [
    {
        name: "String of Dolphins",
        id: 125341,
        scientificName: "Senecio peregrinus",
        difficulty: "easy",
        light: "direct",
        img:
        "https://cdn.shopify.com/s/files/1/2781/9558/products/SUCCULENT_DOLPHINS-1_800x.png?v=1587613674",
        sizes: ["small"],
        watering: 2,
        description:
        "Flipper's trailing stems are full of glossy succulent leaves, reminiscent to a pod of breaching dolphins. Flipper hails from South Africa, so he thrives in warm environments with lots of sun. This dolphin doesn't need too much water to thrive, making him low maintenance and easy to love.",
        price: 15,
    },
    {
        name: "String of Dolphins",
        id: 125342,
        scientificName: "Senecio peregrinus",
        difficulty: "easy",
        light: "direct",
        img:
        "https://cdn.shopify.com/s/files/1/2781/9558/products/SUCCULENT_DOLPHINS-1_800x.png?v=1587613674",
        sizes: ["small"],
        watering: 2,
        description:
        "Flipper's trailing stems are full of glossy succulent leaves, reminiscent to a pod of breaching dolphins. Flipper hails from South Africa, so he thrives in warm environments with lots of sun. This dolphin doesn't need too much water to thrive, making him low maintenance and easy to love.",
        price: 15,
    }
]

test("Checkout Button Renders", () => {
    const container = render(<ShoppingCart cart = {plants} />);

    const checkoutButton = container.getByTestId(/checkoutbutton/i);

    expect(checkoutButton.textContent).toBe("Checkout");
});

test("Selected plants displaying in cart", () => {
    const container = render(<ShoppingCart cart = {plants}/>);

    const cart = container.getByTestId(/cart/i);

    expect(cart.childElementCount).toBeGreaterThan(1);
})