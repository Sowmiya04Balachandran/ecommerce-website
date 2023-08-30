
import React ,{useContext,useState} from 'react';
import classes from './Resouece.module.css'
import CartContext from '../store/CartContext';
const productsArr = [

  {
  
  title: 'Colors',
  
  price: 100,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  
  },
  
  {
  
  title: 'Black and white Colors',
  
  price: 50,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  
  },
  
  {
  
  title: 'Yellow and Black Colors',
  
  price: 70,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  
  },
  
  {
  
  title: 'Blue Color',
  
  price: 100,
  
  imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  
  }
  
  ]
  
  

const Resource = (props) => {

  const cartCtx = useContext(CartContext);
  const [isItemAdded, setIsItemAdded] = useState(false);

  const addToCartHandler = (product) => {
    cartCtx.addItem({ ...product, amount: 1 });
    setIsItemAdded(true);
  };

  const removeFromCartHandler = (product) => {
    cartCtx.removeItem(product.title);
    setIsItemAdded(false);
  };
  const isCartOpen=props.isCartOpen;
 
    // Splitting the products into groups of 2 for each column
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
