import React from 'react';
import Cart from '../Cart/Cart';
import classes from './CartModal.module.css';

const CartModal = (props) => {
  return (
    <div className={classes['cart-modal']}>
      <div className={classes['cart-modal-content']}>
        <button className={classes['close-button']} onClick={props.onClose}>
          X
        </button>
        <h2>Your Cart</h2>
        <Cart cartItems={props.cartItems} onRemoveItem={props.onRemoveItem} />
      </div>
    </div>
  );
};

export default CartModal;

