import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='content'>
                <div className='social-media'>
                    <h3 className='footer-title'>Social Media</h3>
                    <ul className='social-icons'>
                        <li><Link><FaFacebookF /></Link></li>
                        <li><Link><FaTwitter /></Link></li>
                        <li><Link><FaLinkedinIn /></Link></li>
                        <li><Link><FaYoutube /></Link></li>
                    </ul>
                </div>
                <div className='goto'>
                    <h3 className='footer-title'>Go To</h3>
                    <ul className='nav-links'>
                        <li><Link>HOME</Link></li>
                        <li><Link>SERVICE</Link></li>
                        <li><Link>OUR WORK</Link></li>
                        <li><Link>BLOG</Link></li>
                        <li><Link>FAQ</Link></li>
                    </ul>
                </div>
                <div className='footer-form'>
                    <h3 className='footer-title'>Feel free to mail us</h3>

                </div>
            </div>
            <div className='copyright'>
                All rights are reserved by <span>CODEZEROX </span>( 2022 )
            </div>
        </footer>
    );
};

export default Footer;