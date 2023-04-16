import React, { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer, { sumItems } from "./CartReducer";

// Get cartItems from local storage or set an empty array if there are no items
const cartLocalStorage = JSON.parse(localStorage.getItem("cartItems")) || [];

// Set initial state of the cart using items from local storage and sumItems function
const initialState = {
  cartItems: cartLocalStorage,
  ...sumItems(cartLocalStorage),
  checkout: false,
};

// Define the CartProvider component that wraps child components in a CartContext provider
const CartProvider = ({ children }) => {
  // Use the useReducer hook to manage the cart state
  const [state, dispatch] = useReducer(CartReducer, initialState);

  // Define functions that dispatch different types of actions to the reducer
  const addToCart = (payload) => {
    dispatch({ type: "ADD_TO_CART", payload });
  };

  const removeItem = (payload) => {
    dispatch({ type: "REMOVE_ITEM", payload });
  };

  const increase = (payload) => {
    dispatch({ type: "INCREASE_QUANTITY", payload });
  };

  const decrease = (payload) => {
    dispatch({ type: "DECREASE_QUANTITY", payload });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  const handleCheckout = () => {
    dispatch({ type: "CHECKOUT" });
  };

  // Define context values that will be passed down to child components
  const contextValues = {
    ...state,
    addToCart,
    removeItem,
    increase,
    decrease,
    clearCart,
    handleCheckout,
  };

  // Render the CartContext provider with the defined context values and child components
  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

// Export the CartProvider component as default
export default CartProvider;
