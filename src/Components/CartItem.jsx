import { useDispatch } from 'react-redux';
import { removeItemFromCart } from '../redux/cartSlice';
import "../style/CartItem.css"

function CartItem({ item }) {
    const dispatch = useDispatch();
    return (
        <div className="cart-item">
          <img src={item.thumbnail} alt={item.title} className="item-image" />
          <div className="item-details">
            <h3 className="item-title">{item.title}</h3>
            <p className="item-price">Price: ${item.price}</p>
            <p className="item-quantity">Quantity: {item.quantity}</p>
          </div>
          <button className="remove-button" onClick={() => dispatch(removeItemFromCart(item.id))}>
            Remove
          </button>
        </div>
      );
    }
    
    export default CartItem;