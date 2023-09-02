//components/CartButton.js
import React, { useContext } from 'react';
import CartContext from '../../store/CartContext';
import classes from './CartButton.module.css'
const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems=cartCtx.items.reduce(
    (count,item)=>count+item.amount,0
  )

  return (
    <button  onClick={props.onClick} className={classes['cart-button']}>
      Cart <sup>{numberOfCartItems}</sup>
    </button>
  );
};

export default CartButton;

// CartButton.js
// import React, { useContext } from 'react';
// import CartContext from '../../store/CartContext';
// import classes from './CartButton.module.css'; // Import the CSS module

// const CartButton = (props) => {
//   const cartCtx = useContext(CartContext);
//   //console.log('Rendering CartButton');

//   const numberOfCartItems = cartCtx.items.reduce(
//     (count, item) => count + item.amount, 0
//   );
  
//   return (
//     <button className={classes['cart-button']} onClick={props.onClick}>
//       Cart <sup>{numberOfCartItems}</sup>
//     </button>
//   );
// };

// export default CartButton;




// import React, { useContext } from 'react';
// import CartContext from '../../store/CartContext';
// import classes from './CartButton.module.css';

// const CartButton = (props) => {
//   const cartCtx = useContext(CartContext);

//   const numberOfCartItems = cartCtx.items.reduce(
//     (count, item) => count + item.amount, 0
//   );
  
//   return (
//     <button className={classes['cart-button']} onClick={props.onClick}>
//       Cart <sup>{numberOfCartItems}</sup>
//     </button>
//   );
// };

// export default CartButton;
