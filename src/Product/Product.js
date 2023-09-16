import React, { useState, useContext } from 'react';
import CartModal from '../components/UI/CartModal';

import Resource from '../components/Resource';
import CartProvider from '../store/CartProvider';
import CartButton from '../components/Cart/CartButton';
import CartContext from '../store/CartContext';



const Product=()=>{
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartCtx = useContext(CartContext);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    
    <CartProvider>
      <div>
         <CartButton onClick={toggleCart} /> 
        
        
      </div>
      {isCartOpen && (
        <CartModal
          cartItems={cartCtx.items}
          onRemoveItem={cartCtx.removeItem}
          onClose={toggleCart}
        />
      )}
      <Resource />
    </CartProvider>
    
  );
}
export default Product ;


