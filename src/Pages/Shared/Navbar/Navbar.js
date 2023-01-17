import React from 'react';
import './Navbar.css';
import logo from '../../../assets/Logo.svg';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='top-nav'>
      <div className='top-nav-logo'>
        <img src={logo} alt="Codezerox" />
      </div>
      <ul className='menu-div'>
        <li>
          <NavLink className="menu-text" title='Home' to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink className="menu-text" title='Portfolio' to="/home">Portfolio</NavLink>
        </li>
        <li>
          <NavLink className="menu-text" title='Service' to="/home">Service</NavLink>
        </li>
        <li>
          <NavLink className="menu-text" title='Blog' to="/home">Blog</NavLink>
        </li>
        <li>
          <NavLink className="menu-text" title='Faq' to="/home">Faq</NavLink>
        </li>
      </ul>
      <div className='btn-div'>
        <Link className='outline-btn'>Contact Us</Link>
      </div>
    </div>
  );
};

export default Navbar;