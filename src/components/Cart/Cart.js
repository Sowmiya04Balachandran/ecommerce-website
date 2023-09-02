// 

// Cart.js
import React, { useContext } from 'react';
import CartContext from '../../store/CartContext';
import classes from './Cart.module.css';

const Cart = () => {
  const cartCtx = useContext(CartContext);

  return (
    <div className={classes.cart}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartCtx.items.map((item) => (
            <li key={item.title} className={classes['cart-item']}>
              <img src={item.imageUrl} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.amount}</p>
                <p>Total: ${item.price * item.amount}</p>
              </div>
              <button onClick={() => cartCtx.removeItem(item.title)}>
                Remove
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Cart;
