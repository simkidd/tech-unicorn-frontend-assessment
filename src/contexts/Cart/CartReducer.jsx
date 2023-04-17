

const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      // Check if item is already in cart
      const itemIndex = state.findIndex((item) => item.id === action.payload.id);
      if (itemIndex > -1) {
        // Item is already in cart, update quantity
        const newState = [...state];
        newState[itemIndex].quantity += action.payload.quantity;
        return newState;
      } else {
        // Item not in cart, add to cart
        return [...state, action.payload];
      }
    case "INCREASE":
      const tempState1 = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      return {
        ...state,
        cartItems: tempState1,
        totalAmount: state.totalAmount + action.payload.price,
      };
    case "DECREASE":
      const tempState2 = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      return {
        ...state,
        cartItems: tempState2,
        totalAmount: state.totalAmount - action.payload.price,
      };
    case "REMOVE":
      const tempState3 = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cartItems: tempState3,
        totalAmount: state.totalAmount - action.payload.price * action.payload.quantity,
      };
    case "CLEAR":
      return {
        ...state,
        cartItems: [],
        totalAmount: 0,
      };
    default:
      return state;
  }
};

export default CartReducer