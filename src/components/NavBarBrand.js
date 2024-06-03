import React from 'react';
import { Link } from 'react-router-dom';
import './NavBarBrand.css';

const NavBarBrand = ({ to, children }) => {
  return (
    <Link to={to} className="navbar-brand">
      {children}
    </Link>
  );
};

export default NavBarBrand;