import React, { useState } from 'react';
import '../styles/header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [data, setData] = useState(false); 
  
  const show = () => {
    setData(prevData => !prevData);  
  };

  return (
    <>
      <header className="header">
        <div className="header__logo">
          <NavLink to="/">Akanksha Makeover</NavLink>
        </div>
        
        <nav className={`header__nav ${data ? 'active' : ''}`}>
          <NavLink to="/" className="header__link" onClick={show}>Home</NavLink>
          <NavLink to="/visual" className="header__link" onClick={show}>Social Links</NavLink>
          <NavLink to="/gallery" className="header__link" onClick={show}>Gallery</NavLink>
          <NavLink to="/dashboard" className="header__link" onClick={show}>Services</NavLink>
          <NavLink to="/show" className="header__link" onClick={show}>Book Appointment</NavLink>
          <NavLink to="/contact" className="header__link" onClick={show}>Contact Us</NavLink>
        </nav>
        
        <div className="header__toggle" id="headerToggle" onClick={show}>
          ☰
        </div>
      </header>
    </>
  );
};

export default Header;
