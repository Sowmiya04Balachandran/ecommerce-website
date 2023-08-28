
import React from 'react';

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
  ];

const Resource = () => {
  const elements = (
    <ul>
      {productsArr.map((product) => (
        <li key={product.title}>
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          <img src={product.imageUrl} alt={product.title} />
        </li>
      ))}
    </ul>
  );

  return <div>{elements}</div>;
};

export default Resource;
