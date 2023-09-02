import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (itemTitle) => {},
});

export default CartContext;
