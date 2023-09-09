
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classes from './ProductDetail.module.css';

const ProductDetail = (props) => {
  const productId = props.match.params.productId; 

  
  const productData = {
    1: {
      title: 'Product 1',
      price: 100,
      images: [
        'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        'https://tse4.mm.bing.net/th?id=OIP.pUTjzWhNrazAFf-nD_doCAHaHa&pid=Api&P=0&h=180',
      ],
      reviews: ['This product is good.', 'Nice product.'],
    },
    2: {
      title: 'Product 2',
      price: 50,
      images: [
        'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        'https://tse3.mm.bing.net/th?id=OIP.spdQ1WnJ6FFq8cKjV60a9AHaE8&pid=Api&P=0&h=180',
        'https://tse1.mm.bing.net/th?id=OIP.FQC0HuUlBDdJOUX1mPnPOwHaFm&pid=Api&P=0&h=180',
      ],
      reviews: ['Wonderful product.', 'Nice art.', 'Looking different and I like it.'],
    },
    3: {
      title: 'Product 3',
      price: 75,
      images: [
        'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        'https://tse2.mm.bing.net/th?id=OIP.k5L9UsVrl5sfvXIGIVg9cAHaEo&pid=Api&P=0&h=180',
        'https://tse1.mm.bing.net/th?id=OIP.Co6pAUABIJ2ZT7iLnkpG9gHaIB&pid=Api&P=0&h=180',
       
      ],
      reviews: ['Great product.', 'Excellent quality.', 'Highly recommended.'],
    },
    4: {
        title: 'Product 4',
        price: 75,
        images: [
            'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
          
          'https://tse1.mm.bing.net/th?id=OIP.Co6pAUABIJ2ZT7iLnkpG9gHaIB&pid=Api&P=0&h=180',
          'https://tse1.mm.bing.net/th?id=OIP.xboPIEeWoF4rqmQyqdCwTQHaF7&pid=Api&P=0&h=180',
        ],
        reviews: ['Great product.', 'Excellent quality.', 'Highly recommended.'],
      },
  };



const product = productData[productId]; // Get the product based on the productId



const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: product.images.length, // Set it to the number of images
    slidesToScroll: 1,
    beforeChange: (previousSlideIndex, nextSlideIndex) => {
      console.log(`Changing from slide ${previousSlideIndex} to slide ${nextSlideIndex}`);
      // You can use previousSlideIndex and nextSlideIndex here if needed
    },
  };
  

  return (
    <div className={classes['product-detail']}>
    <h1 className={classes['product-title']}>{product.title}</h1>
    <p className={classes['product-price']}>Price: ${product.price}</p>
    <div className={`${classes['product-slider']} product-slider`}>
        <Slider {...sliderSettings}>
          {product.images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Product ${index}`} />
            </div>
          ))}
        </Slider>
                

      </div>

<h2>Product Reviews</h2>
<ul className={classes['product-reviews']}>
  {product.reviews.map((review, index) => (
    <li key={index} className={classes['product-review']}>
      {`Review ${index + 1}: ${review}`}
    </li>
  ))}
</ul>
    </div>
  );
};

export default ProductDetail;
