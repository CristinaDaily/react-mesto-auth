import React from 'react';
import logo from '../images/header-logo.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as token from '../utils/token.js';

function Header({ userData, onSingnOut }) {
  const location = useLocation();
  const navigate = useNavigate();


  return (
    <header className='header'>
      <img src={logo} alt='Logo' className='header__logo' />
      <div className='header__container'>
        {location.pathname === '/' && (
          <div className='header__user-email'>{userData.email}</div>
        )}
        <nav className='header__navbar'>
          {location.pathname === '/' && (
            <>
              <button
                className='header__link button header__button'
                onClick={onSingnOut}
              >
                Sign Out
              </button>
            </>
          )}
          {location.pathname === '/sign-up' && (
            <Link className='header__link button ' to='/sign-in'>
              Log In
            </Link>
          )}
          {location.pathname === '/sign-in' && (
            <Link className='header__link button ' to='/sign-up'>
              Sign Up
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
