import React from 'react';
import './Navbar.css';
import logo from '../../../assets/Logo.svg';
import home from '../../../assets/menu-icons/Home.svg';
import service from '../../../assets/menu-icons/Service.svg';
import portfolio from '../../../assets/menu-icons/Portfolio.svg';
import faq from '../../../assets/menu-icons/FAQ.svg';
import blog from '../../../assets/menu-icons/Blog.svg';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='top-nav'>
      <div className='top-nav-log'>
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