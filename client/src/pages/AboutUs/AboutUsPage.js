import React from 'react';
import s from './AboutUs.module.css';
import Typed from 'react-typed';

export default function AboutUsPage(props) {
    const classOfMotherDiv = 'row ' + s.row__wrapper;
    const textLines = [
        `SportStats is a company consisting of one employee - founder, 
        chief developer, PR manager, chief designer. SportStats is the 
        future of the entire sports industry. So far, this company only 
        has a website, but in the future, a mobile application and a system 
        for analyzing user indicators will be created. The system will use 
        sophisticated algorithms to provide users with the best training programs.`
    ];

    return (
    <div className={classOfMotherDiv}>
        <div className="col s6 offset-s3">
            <div className='card-content white-text'>
                <div className={s.title__wrapper}>
                    <span className='card-title'>About Us</span>
                </div>    
                <div className={s.text__wrapper}>
                    <Typed strings={textLines} typeSpeed={30} />
                </div>
            </div>       
        </div>   
    </div>
    );
}