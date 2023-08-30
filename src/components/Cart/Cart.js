import React from 'react';
import classes from './Cart.module.css';

const Cart = (props) => {

    //const RemoveHandler=() => props.onRemoveItem(item.title)
  return (
    <div className={classes.cart}>
      <h2>Your Cart</h2>
      <ul>
        {props.cartItems.map((item) => (
          <li key={item.title} className={classes['cart-item']}>
            <img src={item.imageUrl} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <button onClick={() => props.onRemoveItem(item.title)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;