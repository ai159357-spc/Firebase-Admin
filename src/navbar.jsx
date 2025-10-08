import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./App.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">MyAdminPanel</Link>

        {/* Hamburger Menu Button */}
        <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links */}
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Add Product</Link>
          <Link to="/display" className="nav-link" onClick={() => setMenuOpen(false)}>Display Products</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
