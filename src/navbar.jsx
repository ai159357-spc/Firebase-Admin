import React from 'react';
import { Link } from 'react-router-dom';
import "./App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">MyAdminPanel</Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Add Product</Link>
          <Link to="/display" className="nav-link">Display Products</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
