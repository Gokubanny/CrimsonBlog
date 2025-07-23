// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Important!
import "./Navbar.css";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search for:', searchTerm);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo1">🅱 MetaBlog</div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="auth-buttons">
          <Link to="/signin" className="btn signin">Sign In</Link>
          <Link to="/signup" className="btn signup">Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
