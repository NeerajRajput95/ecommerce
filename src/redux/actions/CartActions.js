export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: product
  };
};

export const removeFromCart = (product) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: product
  };
};

export const setTotalAmount = (amount) => {
  console.log("nnnnnnn", amount);
  return {
    type: 'SET_TOTAL_AMOUNT',
    payload: amount
  };
};
