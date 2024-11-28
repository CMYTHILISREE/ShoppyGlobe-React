import { Link } from 'react-router-dom';
import "../style/ProductItem.css";


function ProductItem({ product }) {
  return (
    <div className="product-item">
      <img className="product-image" src={product.thumbnail} alt={product.title}  />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-price">${product.price}</p>
      <Link className="view-details-link" to={`/products/${product.id}`} >View Details</Link>
    </div>
  );
}

export default ProductItem;