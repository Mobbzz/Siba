import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";


export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
      <h1>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            siba
          </Link>
        </h1>

        <ul className="nav-links">

        <li>
            <NavLink to="/" className="nav-link">
              Hem
            </NavLink>
          </li>

          <li>
            <NavLink to="/shop" className="nav-link">
              Produkter
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className="nav-link">
              Kontakta Oss
            </NavLink>
          </li>

          <li>
            <NavLink to="/ShoppingCart" className="nav-link">
            <FaShoppingCart />
            </NavLink>
          </li>

        </ul>

      </div>
    </div>
  );
};