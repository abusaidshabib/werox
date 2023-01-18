import React from 'react';
import { Link } from 'react-router-dom';
import './WhatWeProvide.css'

const WhatWeProvide = () => {
    return (
        <div className='wh-we-pro'>
            <p className='subTitle'>
                We Provide to Customer
            </p>
            <h2 className='title2'>
                <span className='highlight_word'>Take Your </span>
                Business <span className='highlight_word'>to the </span><br />
                next level
            </h2>
            <div className='service-card-container'>
                <div className='service-card' id='service1'>
                    <h3 className='s-title'>Web Application Development</h3>
                    <ul className='skills'>
                        <li>React</li>
                        <li>Nodejs</li>
                        <li>Express</li>
                        <li>Mongodb</li>
                    </ul>
                </div>
                <div className='service-card' id='service2'>
                    <h3 className='s-title'>Web Application Development</h3>
                    <ul className='skills'>
                        <li>React</li>
                        <li>Nodejs</li>
                        <li>Express</li>
                        <li>Mongodb</li>
                    </ul>
                </div>
                <div className='service-card' id='service3'>
                    <h3 className='s-title'>Web Application Development</h3>
                    <ul className='skills'>
                        <li>React</li>
                        <li>Nodejs</li>
                        <li>Express</li>
                        <li>Mongodb</li>
                    </ul>
                </div>
                <div className='service-card' id='service4'>
                    <h3 className='s-title'>Web Application Development</h3>
                    <ul className='skills'>
                        <li>React</li>
                        <li>Nodejs</li>
                        <li>Express</li>
                        <li>Mongodb</li>
                    </ul>
                </div>
                <div className='service-card' id='service5'>
                    <h3 className='s-title'>Web Application Development</h3>
                    <ul className='skills'>
                        <li>React</li>
                        <li>Nodejs</li>
                        <li>Express</li>
                        <li>Mongodb</li>
                    </ul>
                </div>
            </div>
            <p className='hire-text'>Hire a dedicated developer <Link>Hire Now</Link></p>
        </div>
    );
};

export default WhatWeProvide;