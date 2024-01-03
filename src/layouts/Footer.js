import React from 'react';
import heart from '../assests/images/heart.svg';

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 MyJournal, all rights reserved.</p>
      <p>Made with <img src={heart} alt='Heart'></img> by <a target='blank' href='https://www.linkedin.com/in/ritin-tiwari'>Ritin Tiwari</a></p>
    </footer>
  );
};

export default Footer;
