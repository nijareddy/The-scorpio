// src/components/Navbar.js
import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import SCORPIO_LOGO from '../../constants/logo';
import {  FaHeart, FaRegHeart } from 'react-icons/fa';
import { FiShoppingCart, FiUser } from 'react-icons/fi';
import { CiSearch } from "react-icons/ci";

const NavBar = () => {
  return (
    <header>
      <div className="navbar-top">
        <marquee behavior="scroll" direction="left" scrollamount="6">
          Free delivery on orders above ₹5000 &nbsp;&nbsp;&nbsp;|
          &nbsp;&nbsp;&nbsp; Easy returns within 30 days &nbsp;&nbsp;&nbsp;|
          &nbsp;&nbsp;&nbsp; Premium quality guaranteed
        </marquee>
      </div>

      <nav className="navbar-main">
        <div className="nav-left">
          <ul className="menu-links">
            <li><Link to="#">Menu ▾</Link></li>
            <li><Link to="#">Categories ▾</Link></li>
          </ul>
        </div>

        <div className="logo-center">
          <img src={SCORPIO_LOGO} alt="The Scorpio" className="logo" />
          <span className="brand-name">The Scorpio</span>
        </div>

        <div className="nav-right">
          <Link to="#"><CiSearch className='nav-right-link'/></Link>
          <Link to="#" className="icon-with-badge">
            <FaRegHeart  className='nav-right-link'/><span className="badge">3</span>
          </Link>
          <Link to="#" className="icon-with-badge">
            <FiShoppingCart  className='nav-right-link'/><span className="badge">2</span>
          </Link>
          <Link to="#"><FiUser className='nav-right-link'/></Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;