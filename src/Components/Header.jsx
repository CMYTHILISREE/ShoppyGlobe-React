import { Link } from 'react-router-dom';
import "../style/Header.css";
import { selectCartItemsCount } from '../redux/cartSlice';
import { useSelector } from 'react-redux';

function Header() {
  const cartItemCount = useSelector(selectCartItemsCount);
  return (
    <div className="header">
      <nav className="navBar">
        <h3 className="logo">ShoppyGlobe</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <li><Link to="/cart" className="nav-item">Cart ({cartItemCount})</Link></li>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;