import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import uprightarrow from '../Assets/up-right-arrow.png'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const headerRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    navbarRef.current.classList.toggle('open');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        headerRef.current && !headerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
        navbarRef.current.classList.remove('open');
      }
    };

    // Add the event listener when the menu is open
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="header" ref={headerRef}>
      <a href="#" className="logoname">
        <span>&copy; MANURI.</span>
      </a>
      <ul className="navbar" ref={navbarRef}>
        <li><a href='#About'>INFO</a><span className='nav-dot'></span></li>
        <li><a href="#work" >WORK</a><span className='nav-dot'></span></li>
        <li><a href="#contact" >CONTACT</a><span className='nav-dot contact-nav-dot'></span></li>
      </ul>
      <div className="main">
        <button
          className="smallscreenmenu"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes color='rgb(173, 169, 169)' /> : <FaBars color='rgb(173, 169, 169)' />}
        </button>
      </div>
      <div className='rightpart'>
        <a href='#'>RESUME<img src={uprightarrow} className='arrow'></img></a>
      </div>
    </div>
  );
}
