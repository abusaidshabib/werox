import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <div className='hero-section'>
            <div>
                <h1 className='hero-title'>DESIGN YOUR WEBSITE WITH <br />
                    HOSTING AND USE BEST MARKETING<br />
                    STRATEGY
                </h1>
                <div className='underline w-1/5 bg-white h-1'>

                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 2xl:mt-10'>
                    <div>
                        <p className='pr-16 mb-12 2xl:text-3xl 2xl:leading-normal'>
                            We will design your website with the best options and help to complete our full services.
                        </p>
                        <div className='flex items-center justify-center 2xl:text-xl md:justify-start 2xl:mt-20'>
                            <Link className='mr-10'>
                                <button className="portfoliobtnBg hover:bg-transparent font-semibold hover:bg-white hover:text-blue-500 2xl:py-3 2xl:px-6 py-2 px-4 rounded">
                                    Portfolio
                                </button>
                            </Link>
                            <p className='mr-10'>or</p>
                            <Link>
                                <button className="bg-white 2xl:py-3 2xl:px-6 2xl:text-xl contactbtn font-semibold hover:bg-blue-500 py-2 px-4 btnBorder rounded">
                                    Contact Us
                                </button>
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