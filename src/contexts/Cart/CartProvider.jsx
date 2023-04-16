import { useReducer } from "react";
import CartContext from "./CartContext";
import cartReducer from "./CartReducer";

const CartProvider = ({ children }) => {
  const initialState = {
    cartItems: [],
    totalPrice: 0,
    checkOut: false,
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItemToCart = (item) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItemFromCart = (item) => {
    dispatch({ type: "REMOVE_ITEM", payload: item });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const increaseQuantity = (item) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: item });
  };

  const decreaseQuantity = (item) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: item });
  };

  const handleCheckout = () => {
    dispatch({ type: "CHECKOUT" });
  };

  const cartContextValue = {
    cartItems: state.cartItems,
    totalPrice: state.totalPrice,
    checkOut: state.checkOut,
    addItemToCart: addItemToCart,
    removeItemFromCart: removeItemFromCart,
    clearCart: clearCart,
    increaseQuantity: increaseQuantity,
    decreaseQuantity: decreaseQuantity,
    handleCheckout: handleCheckout,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
