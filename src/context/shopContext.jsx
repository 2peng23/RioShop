import React, { createContext, useState } from "react";
import { products } from "../product"; // Importing a list of products (presumably)

// Creating a new React context named shopContext
export const shopContext = createContext(null);

// A function to initialize a default cart object with all product IDs as keys and initial quantities set to 0
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

// Creating a context provider component named ShopContextProvider
export const ShopContextProvider = (props) => {
  // Using the useState hook to manage the cart items state with the default cart returned by getDefaultCart
  const [cartItems, setCartItems] = useState(getDefaultCart);

  // A function to calculate the total amount (price) of all items in the cart
  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        // Finding the product information for the item in the cart and calculating the total price
        let itemInfo = products.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  // A function to calculate the total amount (price) for a specific item in the cart
  const getItemAmount = (productId) => {
    let totalItemAmount = 0;
    const itemInfo = products.find((product) => product.id === productId);

    if (itemInfo) {
      const quantity = cartItems[productId];
      if (quantity > 0) {
        totalItemAmount = quantity * itemInfo.price;
      }
    }

    return totalItemAmount;
  };

  // Functions to add, remove, and update items in the cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItem = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  // Creating an object that represents the context value with all necessary functions and data
  const contextValue = {
    cartItems,
    addToCart,
    removeToCart,
    updateCartItem,
    getTotalAmount,
    getItemAmount,
  };

  // Rendering the context provider component with the provided context value and child components
  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};
