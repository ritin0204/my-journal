import React, {useState} from 'react';
import logo from '../assests/images/logo-white.png';
import {NavLink} from 'react-router-dom';

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const showNavbar = () => {
    setShowNav(!showNav);
  };
  return (
    <header>
      <div className='logo-div'>
        <img src={logo} alt='My Journal Logo' className='logo-img'></img>
      </div>
      <nav id='nav-bar' className={showNav ? 'show': ''}>
        <NavLink to="/" exact onClick={showNavbar}>
          Dashboard
        </NavLink>
        <NavLink to="/journals" exact onClick={showNavbar}>
          Journal
        </NavLink>
        <NavLink to="/activities" exact onClick={showNavbar}>
          Activities
        </NavLink>
        <NavLink to="/account" exact onClick={showNavbar}>
          Account
        </NavLink>
      </nav>
      <div className={`burger-div ${showNav ? 'close-burger': ''}`}
        onClick={showNavbar}>
        <div className='burger-inner-div'></div>
        <div className='burger-inner-div'></div>
        <div className='burger-inner-div'></div>
      </div>
    </header>
  );
};

export default Header;
