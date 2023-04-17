import { useReducer, useEffect } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";

const initialState = {
  cartItems: [],
  totalAmount: 0,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  useEffect(() => {
    // Read stored cart items from localStorage
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    dispatch({ type: "SET_CART_ITEMS", payload: storedCartItems });
  }, []);

  useEffect(() => {
    // Store cart items in localStorage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart(item) {
    dispatch({ type: "ADD", payload: item });
  }

  const increase = (item) => {
    dispatch({ type: "INCREASE", payload: item });
  };

  const decrease = (item) => {
    if (item.quantity === 1) {
      dispatch({ type: "REMOVE", payload: item });
    } else {
      dispatch({ type: "DECREASE", payload: item });
    }
  };

  const removeItem = (item) => {
    dispatch({ type: "REMOVE", payload: item });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        totalAmount: state.totalAmount,
        addToCart,
        increase,
        decrease,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
