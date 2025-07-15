import React, { useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import SCORPIO_LOGO from '../../constants/logo';
import { FaRegHeart, FaBars, FaTimes } from 'react-icons/fa';
import { FiShoppingCart, FiUser } from 'react-icons/fi';
import { CiSearch } from "react-icons/ci";

const NavBar = () => {
  const [activeTab, setActiveTab] = useState('categories');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTab = (tab) => {
    setActiveTab((prev) => (prev === tab ? 'categories' : tab));
  };

  return (
    <header>
      {/* === Top Bar === */}
      <div className="navbar-top">
        <marquee behavior="scroll" direction="left" scrollamount="6">
          Free delivery on orders above ₹5000 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Easy returns within 30 days &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Premium quality guaranteed
        </marquee>
      </div>

      {/* === Mobile Row 1: Logo === */}
      <div className="mobile-logo-only">
        <div className="logo-center">
          <img src={SCORPIO_LOGO} alt="The Scorpio" className="logo" />
          <span className="brand-name">The Scorpio</span>
        </div>
      </div>

      {/* === Mobile Row 2: Icons === */}
      <div className="mobile-icons-row">
        <div className="nav-right">
          <Link to="#"><CiSearch className='nav-right-link' /></Link>
          <Link to="/wish-list" className="icon-with-badge">
            <FaRegHeart className='nav-right-link' /><span className="badge">3</span>
          </Link>
          <Link to="/cart" className="icon-with-badge">
            <FiShoppingCart className='nav-right-link' /><span className="badge">2</span>
          </Link>
          <Link to="#"><FiUser className='nav-right-link' /></Link>
          <button className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* === Desktop Navbar === */}
      <nav className="navbar-main desktop-only">
        <div className="nav-left">
          <ul className="menu-links">
            <li>
              <Link
                to="#"
                onClick={() => toggleTab('menu')}
                className={activeTab === 'menu' ? 'active-tab' : ''}
              >
                Menu
              </Link>
            </li>
          </ul>
          <ul className="menu-links">
            <li>
              <Link
                to="#"
                onClick={() => toggleTab('categories')}
                className={activeTab === 'categories' ? 'active-tab' : ''}
              >
                Categories
              </Link>
            </li>
          </ul>
        </div>

        <div className="logo-center">
          <img src={SCORPIO_LOGO} alt="The Scorpio" className="logo" />
          <span className="brand-name">The Scorpio</span>
        </div>

        <div className="nav-right">
          <Link to="#"><CiSearch className='nav-right-link' /></Link>
          <Link to="/wish-list" className="icon-with-badge">
            <FaRegHeart className='nav-right-link' /><span className="badge">3</span>
          </Link>
          <Link to="/cart" className="icon-with-badge">
            <FiShoppingCart className='nav-right-link' /><span className="badge">2</span>
          </Link>
          <Link to="#"><FiUser className='nav-right-link' /></Link>
          <button className="hamburger">
            {false ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* === Second Row (Desktop) === */}
      {activeTab === 'menu' && (
        <div className="second-row">
          <ul className="second-row-list">
            <li><Link to="/products">All Products</Link></li>
            <li><Link to="/">New Arrivals</Link></li>
            <li><Link to="/">Trending</Link></li>
            <li><Link to="/">Sale</Link></li>
          </ul>
        </div>
      )}
      {activeTab === 'categories' && (
        <div className="second-row">
          <ul className="second-row-list">
            <li><Link to={{ pathname: "/products", search: "?category=Suits" }}>Suits</Link></li>
            <li><Link to={{ pathname: "/products", search: "?category=Blazers" }}>Blazers</Link></li>
            <li><Link to={{ pathname: "/products", search: "?category=Trousers" }}>Trousers</Link></li>
            <li><Link to={{ pathname: "/products", search: "?category=Accessories" }}>Accessories</Link></li>
            <li><Link to={{ pathname: "/products", search: "?category=T-Shirts" }}>T-Shirts</Link></li>
            <li><Link to={{ pathname: "/products", search: "?category=Uniforms" }}>Uniforms</Link></li>
          </ul>
        </div>
      )}

      {/* === Mobile Drawer === */}
      {isMobileMenuOpen && (
        <div className="mobile-drawer">
          <h4>Menu</h4>
          <ul>
            <li><Link to="/products">All Products</Link></li>
            <li><Link to="/">New Arrivals</Link></li>
            <li><Link to="/">Trending</Link></li>
            <li><Link to="/">Sale</Link></li>
          </ul>
          <h4>Categories</h4>
          <ul>
            <li><Link to={{ pathname: "/products", search: "?category=Suits" }}>Suits</Link></li>
            <li><Link to={{ pathname: "/products", search: "?category=Blazers" }}>Blazers</Link></li>
            <li><Link to={{ pathname: "/products", search: "?category=Trousers" }}>Trousers</Link></li>
            <li><Link to={{ pathname: "/products", search: "?category=Accessories" }}>Accessories</Link></li>
            <li><Link to={{ pathname: "/products", search: "?category=T-Shirts" }}>T-Shirts</Link></li>
            <li><Link to={{ pathname: "/products", search: "?category=Uniforms" }}>Uniforms</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
