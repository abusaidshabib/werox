import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <div className='hero-section'>
            <div>
                <h1 className='hero-title '>DESIGN YOUR WEBSITE WITH <br />
                    HOSTING AND USE BEST MARKETING<br />
                    STRATEGY
                </h1>

                <div className='underline'></div>

                <div className='hero-detail'>
                    <div>
                        <p className='hero-para'>
                            We will design your website with the best options and help to complete our full services.
                        </p>
                        <div className='hero-links'>
                            <Link className="primary-btn">
                                    Portfolio
                            </Link>
                            <p className='or'><b>or,</b></p>
                            <Link className="hero-contact">
                                    Contact Us
                            </Link>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;