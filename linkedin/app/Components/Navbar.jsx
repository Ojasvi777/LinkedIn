import React from 'react';
import './Nav.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">CareerAI</div>
      <ul className="nav-links">
        <li>Features</li>
        <li>Testimonials</li>
        <li>Join Waitlist</li>
      </ul>
    </nav>
  );
};

export default Navbar;
