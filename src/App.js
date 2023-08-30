// //import logo from './logo.svg';
// import React, { useState ,useContext} from 'react';
// import CartModal from './components/UI/CartModal';
// import   './App.css'
// //import Cart from './components/Cart/Cart'; // Adjust the import path
// import Resource from './components/Resourse';
// import CartProvider from './store/CartProvider';
// import CartContext from './store/CartContext';

// function App() {
//   const initialCart = [
//     {
//       title: 'Colors',
//       price: 100,
//       imageUrl:
//         'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
//       quantity: 2,
//     },
//     {
//       title: 'Black and white Colors',
//       price: 50,
//       imageUrl:
//         'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
//       quantity: 3,
//     },
//     {
//       title: 'Yellow and Black Colors',
//       price: 70,
//       imageUrl:
//         'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
//       quantity: 1,
//     },
//   ];

//   const [cartItems, setCartItems] = useState(initialCart);
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const handleRemoveItem = (title) => {
//     const updatedCart = cartItems.filter((item) => item.title !== title);
//     setCartItems(updatedCart);
//   };

//   const toggleCart = () => {
//     setIsCartOpen(!isCartOpen);
//   };

//   const cartCtx = useContext(CartContext);

//   return (
    
//     <CartProvider>
//       <div className='align-right'>
//       <button onClick={toggleCart}>
//       Cart <sup>{cartCtx.items.length}</sup>
//       </button></div>
//       {isCartOpen && (
//                 <CartModal
//                 cartItems={cartItems}
//                 onRemoveItem={handleRemoveItem}
//                 onClose={toggleCart}
//               />
      
//       )}
//       <Resource />
//     </CartProvider>
//   );
// }

// export default App;


// App.js
import React, { useState,useContext } from 'react';
import CartModal from './components/UI/CartModal';
import './App.css';
import Resource from './components/Resource';
import CartProvider from './store/CartProvider';
import CartButton from './components/Cart/CartButton'; // Import the CartButton component
import CartContext from './store/CartContext';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartCtx=useContext(CartContext);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  const handleRemoveItem = (itemTitle) => {
    cartCtx.removeItem(itemTitle); // Call the removeItem function from context
  };

  return (
    <CartProvider>
      <div className='align-right'>
        <CartButton onClick={toggleCart} /> {/* Use the CartButton component */}
      </div>
      {isCartOpen && (
        <CartModal
        cartItems={cartCtx.items}
        onRemoveItem={handleRemoveItem} // Pass the remove item function
      />
      )}
      <Resource isCartOpen={isCartOpen}/>
    </CartProvider>
  );
}

export default App;
