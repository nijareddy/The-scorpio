// src/components/Footer.js
import React from 'react';
import './index.css';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-column">
          <h4>More Info</h4>
          <ul>
            <li>Size Guide</li>
            <li>Care Instructions</li>
            <li>Fabric Details</li>
            <li>Tailoring Services</li>
            <li>Custom Orders</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About The Scorpio</li>
            <li>Our Story</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Sustainability</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>Shipping & Returns</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Track Your Order</li>
          </ul>
        </div>

        <div className="footer-column contact-column">
          <h4>Connect With Us</h4>
          <ul className="contact-info">
            <li><FiPhone /> +91 98765 43210</li>
            <li><FiMail /> info@thescorpio.com</li>
            <li><FiMapPin /> Mumbai, India</li>
          </ul>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="logo-section">
          <img src="/scorpio.png" alt="The Scorpio Logo" className="footer-logo" />
          <div><span >The Scorpio</span>
          <p>Premium Formal Clothing</p></div>
          
        </div>
        <div className="copyright">
          © 2024 The Scorpio. All rights reserved.  
          <br />
          <small>Elevating professional style since 2020</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
