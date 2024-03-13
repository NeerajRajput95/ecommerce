const initialState = {
  cartItems: [],
  total: 0 // Initial total amount is 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload)
      };
    case 'SET_TOTAL_AMOUNT':
      console.log("rrrrrrrrrrr", action.payload );
      return {
        ...state,
        total: action.payload // Update the total amount
      };
    default:
      return state;
  }
};

export default cartReducer;
