// Save cart items to local storage
const Storage = (cartItems) => {
  localStorage.setItem(
    "cartItems",
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};

// Calculate the total price and quantity of all items in the cart
export const sumItems = (cartItems) => {
  let itemCount = cartItems.reduce(
    (total, product) => total + product.quantity,
    0
  );
  let total = cartItems
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemCount, total };
};

// Reducer function for managing the cart state
const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        // If the item already exists in the cart, do not add it again
        return state;
      } else {
        // If the item is not in the cart, add it with quantity 1
        const updatedCartItems = [
          ...state.cartItems,
          { ...action.payload, quantity: 1 },
        ];
        return {
          ...state,
          ...sumItems(updatedCartItems),
          cartItems: updatedCartItems,
        };
      }

    case "REMOVE_ITEM":
      // Remove the item from the cart
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        ...sumItems(updatedCartItems),
        cartItems: updatedCartItems,
      };
    case "INCREASE_QUANTITY":
      // Find the index of the item to increase in the cartItems array
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      // Increment the quantity of the item at that index by 1
      state.cartItems[itemIndex].quantity++;

      // Return a new state object that includes the updated cartItems array and total quantity/price
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems], // Make sure to copy the array to ensure immutability
      };

    case "DECREASE_QUANTITY":
      // Find the index of the item to decrease in the cartItems array
      const itemIndex2 = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      // Get the quantity of the item at that index
      const itemQuantity = state.cartItems[itemIndex2].quantity;

      // If the quantity is already zero, don't decrease it further
      if (itemQuantity === 0) {
        return state;
      }

      // Otherwise, decrement the quantity of the item at that index by 1
      state.cartItems[itemIndex2].quantity--;

      // Return a new state object that includes the updated cartItems array and total quantity/price
      return {
        ...state,
        ...sumItems(state.cartItems),
        cartItems: [...state.cartItems], // Make sure to copy the array to ensure immutability
      };

    case "CHECKOUT":
      // Clear the cart and set checkout flag to true
      Storage([]);
      return {
        cartItems: [],
        checkout: true,
        ...sumItems([]),
      };
    case "CLEAR":
      // Clear the cart
      Storage([]);
      return {
        cartItems: [],
        ...sumItems([]),
      };
    // return the state if the action type is not found
    default:
      return state;
  }
};

export default CartReducer;
