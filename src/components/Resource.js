
// import React ,{useContext,useState} from 'react';
// import classes from './Resouece.module.css'
// import CartContext from '../store/CartContext';
// const productsArr = [

//   {
//   id:1,
  
//   title: 'Colors',
  
//   price: 100,
  
//   imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  
//   },
  
//   {
//     id:2,
  
//   title: 'Black and white Colors',
  
//   price: 50,
  
//   imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  
//   },
  
//   {
  
//     id:3,

//   title: 'Yellow and Black Colors',
  
//   price: 70,
  
//   imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  
//   },
  
//   {

//     id:4,
  
//   title: 'Blue Color',
  
//   price: 100,
  
//   imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  
//   }
  
//   ]
  
  

// const Resource = (props) => {

//   const cartCtx = useContext(CartContext);
//   const [isItemAdded, setIsItemAdded] = useState(false);


//   // const isItemInCart = (title) => {
//   //   return cartCtx.items.some((item) => item.title === title);
//   // };

//   const addToCartHandler = (product) => {
//     cartCtx.addItem({ ...product, amount: 1 });
//     setIsItemAdded(true);
//   };

//   const removeFromCartHandler = (product) => {
//     cartCtx.removeItem(product.title);
//     setIsItemAdded(false);
//   };
//   const isCartOpen=props.isCartOpen;
 
//     // Splitting the products into groups of 2 for each column
//     const columns = [];
//     for (let i = 0; i < productsArr.length; i += 2) {
//       columns.push(productsArr.slice(i, i + 2));
//     }

    
  
//     const elements = (
//       <div className={classes['product-columns']}>
//         {columns.map((column, columnIndex) => (
//           <ul key={columnIndex} className={classes['product-column']}>
//             {column.map((product) => (
//               <li key={product.title}>
//                 <h2>{product.title}</h2>
//                 <p>Price: ${product.price}</p>
//                 <img src={product.imageUrl} alt={product.title} />
//                 <div>
//   {isItemAdded && isCartOpen ? (
//     <button onClick={() => removeFromCartHandler(product)}>Remove from Cart</button>
//   ) : (
//     <button onClick={() => addToCartHandler(product)}>Add to Cart</button>
//   )}
// </div>
//               </li>
//             ))}
//           </ul>
//         ))}
//       </div>
//     );
  
//     return <div>{elements}</div>;
//   };
  
//   export default Resource;

import React, { useContext, useState } from 'react';
import classes from './Resource.module.css';
import CartContext from '../store/CartContext';

const productsArr = [
  {
    id: 1,
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    id: 2,
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    id: 3,
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    id: 4,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];

const Resource = (props) => {
  const cartCtx = useContext(CartContext);
  const [isItemAdded, setIsItemAdded] = useState(false);

  // const addToCartHandler = (product) => {
  //   cartCtx.addItem({ ...product, amount: 1 });
  //   setIsItemAdded(true);
  // };

  // const addToCartHandler = (product) => {
  //   cartCtx.addItem({ ...product, amount: 1 });
  //    setIsItemAdded(cartCtx.items.some(item => item.title === product.title));
  // };
  

  // const removeFromCartHandler = (product) => {
  //   cartCtx.removeItem(product.title);
  //   setIsItemAdded(false);
  // };

  const addToCartHandler = (product) => {
    console.log('Adding to cart:', product.title);
    cartCtx.addItem({ ...product, amount: 1 });
    setIsItemAdded(cartCtx.items.some(item => item.title === product.title));
  };
  
  const removeFromCartHandler = (product) => {
    console.log('Removing from cart:', product.title);
    cartCtx.removeItem(product.title);
    setIsItemAdded(false);
  };

  const isCartOpen = props.isCartOpen; // Received from the parent component

  const columns = [];
  for (let i = 0; i < productsArr.length; i += 2) {
    columns.push(productsArr.slice(i, i + 2));
  }

  

  const elements = (
    <div className={classes['product-columns']}>
      {columns.map((column, columnIndex) => (
        <ul key={columnIndex} className={classes['product-column']}>
          {column.map((product) => (
            <li key={product.title}>
              <h2>{product.title}</h2>
              <p>Price: ${product.price}</p>
              <img src={product.imageUrl} alt={product.title} />
              <div>
  {isItemAdded && isCartOpen ? (
    <button onClick={() => removeFromCartHandler(product)}>Remove from Cart</button>
  ) : (
    <button onClick={() => addToCartHandler(product)}>Add to Cart</button>
  )}
</div>

            </li>
          ))}
        </ul>
      ))}
    </div>
  );

  return <div>{elements}</div>;
};

export default Resource;

// import React, { useContext, useState } from 'react';
// import classes from './Resource.module.css';
// import CartContext from '../store/CartContext';
// import CartButton from './Cart/CartButton';

// const productsArr = [
//   {
//         id: 1,
//         title: 'Colors',
//         price: 100,
//         imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
//       },
//       {
//         id: 2,
//         title: 'Black and white Colors',
//         price: 50,
//         imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
//       },
//       {
//         id: 3,
//         title: 'Yellow and Black Colors',
//         price: 70,
//         imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
//       },
//       {
//         id: 4,
//         title: 'Blue Color',
//         price: 100,
//         imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
//       },
// ];

// const Resource = (props) => {
//   const cartCtx = useContext(CartContext);
//   const [isItemAdded, setIsItemAdded] = useState(false);

//   const addToCartHandler = (product) => {
//     cartCtx.addItem({ ...product, amount: 1 });
//     setIsItemAdded(cartCtx.items.some(item => item.title === product.title));
//   };

  

//   const removeFromCartHandler = (product) => {
//     cartCtx.removeItem(product.title);
//     setIsItemAdded(false);
//   };

//   const isCartOpen = props.isCartOpen;

//   const columns = [];
//   for (let i = 0; i < productsArr.length; i += 2) {
//     columns.push(productsArr.slice(i, i + 2));
//   }

//   const elements = (
//     <div className={classes['product-columns']}>
//       {columns.map((column, columnIndex) => (
//         <ul key={columnIndex} className={classes['product-column']}>
//           {column.map((product) => (
//             <li key={product.title}>
//               <h2>{product.title}</h2>
//               <p>Price: ${product.price}</p>
//               <img src={product.imageUrl} alt={product.title} />
//               <div>
//                 {isItemAdded && isCartOpen ? (
//                   <button onClick={() => removeFromCartHandler(product)}>Remove from Cart</button>
//                 ) : (
//                    <button onClick={() => addToCartHandler(product)}>Add to Cart </button>
//                   // <button onClick={() => addToCartHandler(product)}>{isItemAdded ? "Added to Cart" : "Add to Cart"}</button>
//                 )}
//               </div>
//             </li>
//           ))}
//         </ul>
//       ))}
//     </div>
//   );

//   return (
//     <div>
//       {elements}
//       <CartButton onClick={addToCartHandler}/>
//     </div>
//   );

// };

// export default Resource;



// import React, { useContext,useEffect } from 'react';
// import classes from './Resource.module.css';
// import CartContext from '../store/CartContext';
// //import CartButton from './Cart/CartButton';

// const productsArr = [
//   // Your product data
//   {
//             id: 1,
//             title: 'Colors',
//             price: 100,
//             imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
//           },
//           {
//             id: 2,
//             title: 'Black and white Colors',
//             price: 50,
//             imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
//           },
//           {
//             id: 3,
//             title: 'Yellow and Black Colors',
//             price: 70,
//             imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
//           },
//           {
//             id: 4,
//             title: 'Blue Color',
//             price: 100,
//             imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
//           },
// ];

// const Resource = () => {
//   const cartCtx = useContext(CartContext);

//   // const addToCartHandler = (product) => {
//   //   cartCtx.addItem({ ...product, amount: 1 });
//   // };
//   const addToCartHandler = (product) => {
//     console.log('Adding to cart:', product);
//     cartCtx.addItem({ ...product, amount: 1 });
//    // console.log('Updated cart:', cartCtx.items);
//   };

//   useEffect(() => {
//     console.log('Updated cart:', cartCtx.items);
//   }, [cartCtx.items]);
  

//   const elements = (
//     <div className={classes['product-columns']}>
//       {productsArr.map((product) => (
//         <ul key={product.id} className={classes['product-column']}>
//           <li key={product.title}>
//             <h2>{product.title}</h2>
//             <p>Price: ${product.price}</p>
//             <img src={product.imageUrl} alt={product.title} />
//             <div>
//               <button onClick={() => addToCartHandler(product)}>Add to Cart</button>
//             </div>
//           </li>
//         </ul>
//       ))}
//     </div>
//   );

//   return (
//     <div>
//       {elements}
//     </div>
//   );
// };

// export default Resource;