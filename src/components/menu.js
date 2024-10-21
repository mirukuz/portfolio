// HamburgerMenu.js
import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'gatsby';
import '../styles/menu.css';

const Menu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={`hamburger ${open ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <div className={`menu ${open ? 'show' : ''}`}>
        <ul>
          <li><Link class="link" to="/professional-history">Professional History</Link></li>
          <li><Link class="link" to="/projects">Hobby Projects</Link></li>
          <li>
            <Link class="link" to="https://www.linkedin.com/in/molly-zhou-bb661297" target="_blank" rel="noopener noreferrer">
              {/* Uncomment the below line if using react-fontawesome */}
              {/* <FontAwesomeIcon icon={faLinkedin} /> */}
              <FaLinkedin class="fab"/>
              LinkedIn
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Menu;
