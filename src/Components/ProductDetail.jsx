import { useEffect, useState } from 'react';
import { addItemToCart } from '../redux/cartSlice';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import "../style/ProductDetail.css"

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const result = await response.json();
        setProduct(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="loading">Loading product...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="product-detail">
      {product && (
        <div className="product-info">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price}</p>
          <button className="add-to-cart" onClick={() => dispatch(addItemToCart(product))}>Add to Cart</button>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;