import React from 'react';
import s from './AboutUs.module.css';

export default function AboutUsPage(props) {
    const classOfMotherDiv = 'row ' + s.row__wrapper;

    return (
    <div className={classOfMotherDiv}>
        <div className="col s6 offset-s3">
            <div className='card-content white-text'>
                <div className={s.title__wrapper}>
                    <span className='card-title'>About Us</span>
                </div>    
                <div className={s.text__wrapper}>
                    <span>SportStats is a company consisting of one employee — founder, 
                    chief developer, PR manager, chief designer. SportStats is the
                    future of the entire sports industry. So far, this company has
                    only the website at its disposal, but in the future a mobile application
                    will be created, a system for analyzing user indicators, which, using
                    complex algorithms, will provide them with the best training programs.</span>
                </div>
            </div>       
        </div>    
    </div>
    );
}