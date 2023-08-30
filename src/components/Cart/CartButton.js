// components/CartButton.js
import React, { useContext } from 'react';
import CartContext from '../../store/CartContext';

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems=cartCtx.items.reduce(
    (count,item)=>count+item.amount,0
  )

  return (
    <button onClick={props.onClick}>
      Cart <sup>{numberOfCartItems}</sup>
    </button>
  );
};

export default CartButton;
