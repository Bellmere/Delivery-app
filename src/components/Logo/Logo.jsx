import { Link } from 'react-router-dom';

import './Logo.css';

export const Logo = () => {
  return (
    <div className="logo">
      <Link className="logo__link" to="/">
        <span>Eliftech</span>
        Shop
      </Link>
    </div>
  );
};
