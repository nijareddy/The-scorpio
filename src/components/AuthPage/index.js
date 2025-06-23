import React, { useState } from 'react';
import './index.css';

const AuthPage = () => {
  const [isRegistering, setIsRegistering] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-left">
          <h2 className="brand">The Scorpio</h2>
          <h3 className='welcome-text'>{Registering ? 'Join The Scorpio' : 'Welcome Back!'}</h3>
          <p>
            {isRegistering
              ? 'Create an account to explore our premium formal collection.'
              : 'Sign in to access your account and continue your style journey.'}
          </p>
          <ul>
            <li>Premium Quality Guaranteed</li>
            <li>Free Delivery Above ₹5000</li>
            <li>Easy Returns Within 30 Days</li>
          </ul>
        </div>

        <div className="auth-right">
          <div className="tabs">             
            <span
              className={!isRegistering ? 'active' : ''}
              onClick={() => setIsRegistering(false)}
            >
              Sign In
            </span>
            <span
              className={isRegistering ? 'active' : ''}
              onClick={() => setIsRegistering(true)}
            >
              Register
            </span>
          </div>

          {isRegistering ? (
            <form className="auth-form">
              <div className="form-group">
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
              </div>
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" required />
              <input type="password" placeholder="Password" required />
              <button type="submit" className="primary-btn">Create Account</button>
            </form>
          ) : (
            <form className="auth-form">
              <input type="email" placeholder="Email Address" required />
              <input type="password" placeholder="Password" required />
              <div className="form-options">
                <label><input type="checkbox" /> Remember me</label>
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