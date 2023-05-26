import { NavLink } from 'react-router-dom';
import './Navigation.css';

export const Navigation = () => {
  return (
    <nav className="main__nav">
      <NavLink className="nav__link" to="/">
        Shop
      </NavLink>
      <NavLink className="nav__link" to="shopping-cart">
        Shopping Cart
      </NavLink>
    </nav>
  );
};
