import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <Link to="/"><h1>Real Estate</h1></Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link> </li>
        <li><Link to="/propertylist">Properties</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
