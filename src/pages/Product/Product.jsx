import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Product.module.css';

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Fetch product data based on ID
    const fetchProduct = async () => {
      try {
        // API call would go here
        setProduct({
          id,
          name: 'Sample Product',
          price: 99.99,
          description: 'This is a sample product description.',
          images: ['/sample-product.jpg']
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className={styles.container}>
      <div className={styles.productImages}>
        <img src={product.images[0]} alt={product.name} />
      </div>
      <div className={styles.productDetails}>
        <h1>{product.name}</h1>
        <p className={styles.price}>${product.price}</p>
        <p className={styles.description}>{product.description}</p>
        
        <div className={styles.quantitySelector}>
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>

        <button className={styles.addToCart}>Add to Cart</button>
        <button className={styles.addToWishlist}>Add to Wishlist</button>
      </div>
    </div>
  );
}