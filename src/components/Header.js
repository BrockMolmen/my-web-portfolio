import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = (props) => {
  return (
    <header>
      <div className="nav-links">
        <ul className="nav-list">
          {/* <li><Link className="link-link" to={'/'}>Home</Link></li> */}
          <li><Link className="link-link" to={'/about'}>About</Link></li>
          <li><Link className="link-link" to={'/'}><img id="header-logo" src="logo.svg" alt="TriLogo"/></Link></li>
          <li><Link className="link-link" to={'/projects'}>Projects</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
