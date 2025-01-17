import React, { useState } from 'react';
import '../styles/header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [data, setData] = useState(false); // State to toggle visibility of mobile menu
  
  const show = () => {
    setData(prevData => !prevData);  // Toggle the menu visibility
  };

  return (
    <>
      <header className="header">
        <div className="header__logo">
          <NavLink to="/">Akanksha Makeover</NavLink>
        </div>
        
        <nav className={`header__nav ${data ? 'active' : ''}`}>
          <NavLink to="/idk" className="header__link">Home</NavLink>
          <NavLink to="/visual" className="header__link">Social Links</NavLink>
          <NavLink to="/processMails" className="header__link">Gallery</NavLink>
          <NavLink to="/dashboard" className="header__link">Services</NavLink>
          <NavLink to="/show" className="header__link">Book Appointment</NavLink>
          <NavLink to="/pushMail" className="header__link">Contact Us</NavLink>
        </nav>
        
        <div className="header__toggle" id="headerToggle" onClick={show}>
          ☰
        </div>
      </header>
    </>
  );
};

export default Header;
