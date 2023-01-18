import React from 'react';
import './Experience.css'

const Experience = () => {
    return (
        <div className='experience-container'>
            <ul className='exp-list'>
                <li className='exp'>
                    <p className='value'>1500+</p>
                    <p className='ex-title'>Project Already Completed</p>
                </li>
                <li className='exp'>
                    <p className='value'>1200+</p>
                    <p className='ex-title'>Happy Clients Work</p>
                </li>
                <li className='exp'>
                    <p className='value'>1 year</p>
                    <p className='ex-title'>Already Completed</p>
                </li>
                <li className='exp'>
                    <p className='value'>1+</p>
                    <p className='ex-title'>Team members</p>
                </li>
                <li className='exp'>
                    <p className='value'>24/7</p>
                    <p className='ex-title'>Online Support time</p>
                </li>
            </ul>
        </div>
    );
};

export default Experience;