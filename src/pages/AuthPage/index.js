import React, { useState } from 'react';
import './index.css';
import SCORPIO_LOGO from '../../constants/logo';

const AuthPage = () => {
  const [isRegistering, setIsRegistering] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-box">

        <div className="auth-left">
          <div className="logo-login-section">
            <img src={SCORPIO_LOGO} alt="The Scorpio" className="logo" />
            <span className="brand-name-login">The Scorpio</span>
          </div>
          <h3 className='welcome-text'>{isRegistering ? 'Join The Scorpio' : 'Welcome Back!'}</h3>
          <p className='status-text'>
            {isRegistering
              ? 'Create an account to explore our premium formal collection.'
              : 'Sign in to access your account and continue your style journey.'}
          </p>
          <ul className='about-web'>
            <li>Premium Quality Guaranteed</li>
            <li>Free Delivery Above ₹5000</li>
            <li>Easy Returns Within 30 Days</li>
          </ul>
        </div>

        <div className="auth-right">
          <div className="tabs">
            <button
              className={!isRegistering ? 'active' : ''}
              onClick={() => setIsRegistering(false)}
            >
              Sign In
            </button>
            <button
              className={isRegistering ? 'active' : ''}
              onClick={() => setIsRegistering(true)}
            >
              Register
            </button>
          </div>

          {isRegistering ? (
            <form className="auth-form">
              <div className="form-group">
                <label className='label-text'> First Name</label>
                <input type="text" placeholder="First Name" required />
                <label className='label-text'>Last Name</label>
                <input type="text" placeholder="Last Name" required />
              </div>
              <label className='label-text'>Email Address</label>
              <input type="email" placeholder="Email Address" required />
              <label className='label-text'>Phone Number</label>
              <input type="tel" placeholder="Phone Number" required />
              <label className='label-text'>Password</label>
              <input type="password" placeholder="Password" required />

              <button type="submit" className="primary-btn">Create Account</button>
            </form>
          ) : (
            <form className="auth-form">
              <label className='label-text'>Email Address</label>
              <input type="email" placeholder="Email Address" required />
              <label className='label-text'>Password</label>
              <input type="password" placeholder="Password" required />
              <div className="form-options">
                <label><input type="checkbox" />Remember me</label>
                <a href="#">Forgot password?</a>
              </div>
              <button type="submit" className="primary-btn">Sign In</button>
            </form>
          )}

          <div className="divider">or continue with</div>
          <div className="social-buttons">
            <button>Google</button>
            <button>Facebook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;