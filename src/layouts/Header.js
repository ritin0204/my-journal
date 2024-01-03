import React from 'react';
import logo from '../assests/images/logo-white.png';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='logo-div'>
        <img src={logo} alt='My Journal Logo' className='logo-img'></img>
      </div>
      <nav id='nav-bar'>
        <NavLink to="/" exact>
          Dashboard
        </NavLink>
        <NavLink to="/journal" exact>
          Journal
        </NavLink>
        <NavLink to="/activities" exact>
          Activities
        </NavLink>
        <NavLink to="/account" exact>
          Account
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
