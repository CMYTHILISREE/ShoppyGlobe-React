import CartItem from './CartItem';
import { clearCart } from '../redux/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import "../style/Cart.css"


function Cart(){
   // useSelector hook to access the cart items from the Redux store
    const items = useSelector(state => state.cart.items);
    const dispatch = useDispatch();// Dispatch function to send actions to the Redux store

    return(
        <div className="cart-container">
        <h2 className="cart-title">Your Cart</h2>
          {/* Conditionally render based on whether the cart is empty or not */}
        {items.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          <>
            <div className="cart-items">
              {items.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <button  className="clear-cart" onClick={() => dispatch(clearCart())}>
              Clear Cart
            </button>
          </>
        )}
      </div>
    );
}
export default Cart;