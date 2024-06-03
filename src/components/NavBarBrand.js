// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Make sure you have corresponding CSS for styling

const NavBar = ({ children, className }) => {
  return (
    <nav className={className}>
      {children}
    </nav>
  );
};

export default NavBar;
