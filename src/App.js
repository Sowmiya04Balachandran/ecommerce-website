
// // // App.js
// //import {createBrowserRouter ,RouterProvider } from 'react-router-dom';
// import React, { useState, useContext } from 'react';
// import CartModal from './components/UI/CartModal';
// import './App.css';
// import Resource from './components/Resource';
// import CartProvider from './store/CartProvider';
// import CartButton from './components/Cart/CartButton';
// import CartContext from './store/CartContext';
// //import About from './AboutPage/About';


// // const router=createBrowserRouter([
// //   {path:'/aboutUs',element:<About />},
  
// // ])

// function App() {
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const cartCtx = useContext(CartContext);

//   const toggleCart = () => {
//     setIsCartOpen(!isCartOpen);
//   };

//   return (
//     //<RouterProvider router={router}>
//     <CartProvider>
//       <div>
//          <CartButton onClick={toggleCart} /> 
        
        
//       </div>
//       {isCartOpen && (
//         <CartModal
//           cartItems={cartCtx.items}
//           onRemoveItem={cartCtx.removeItem}
//           onClose={toggleCart}
//         />
//       )}
//       <Resource />
//     </CartProvider>
//     //</RouterProvider>
//   );
// }

// export default App;


import React from 'react';
import {createBrowserRouter ,RouterProvider } from 'react-router-dom';
import Root from './Links/Root';
import StorePage from './Pages/StorePage';
import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage';

const App=()=>{

  const router=createBrowserRouter([
    {path:'/',element:<Root/>,children:[
      {path:'/About',element:<AboutPage />},
       {path:'/Store',element:<StorePage />},
       {path:'/',element:<HomePage />},
    ]}
       
      
     ])
  return (
    <RouterProvider router={router}/>
  )
}
export default App;