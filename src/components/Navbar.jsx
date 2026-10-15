import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalItems } from '../redux/CartSlice.jsx';

export default function Navbar() {
  const totalItems = useSelector(selectTotalItems);

  return (
    <header className="navbar">
      <Link to="/" className="brand">
        🌴 Paradise Nursery
      </Link>
      <nav className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/products">Plants</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/cart" className="cart-link">
          🛒 Cart <span className="cart-badge" data-testid="cart-count">{totalItems}</span>
        </NavLink>
      </nav>
    </header>
  );
}
