import React from 'react';
import s from './AboutUs.module.css';
import Typed from 'react-typed';
import cn from 'classnames';
import {MainReturn} from './AboutUsContainer';

const AboutUsPage: React.FC<MainReturn> = (): JSX.Element => {
    const textLines: string[] = [
        `SportStats is a company consisting of one employee - founder, 
        chief developer, PR manager, chief designer. SportStats is the 
        future of the entire sports industry. So far, this company only 
        has a website, but in the future, a mobile application and a system 
        for analyzing user indicators will be created. The system will use 
        sophisticated algorithms to provide users with the best training programs.`
    ];

    return (
    <div className={cn(s['row-wrapper'], s['row-wrapper_about-us'])}>
        <div className={cn(s['row-wrapper__col'], s['row-wrapper__col_s12'], s['row-wrapper__col_m8'])}>
            <div className={cn(s['row-wrapper__card-content'], s['row-wrapper__card-content_white-text'])}>
                <div className={s['row-wrapper__card-wrapper']}>
                    <span className={s['row-wrapper__card-title']}>About Us</span>
                </div>    
                <div className={s['row-wrapper__text-wrapper']}>
                    <Typed strings={textLines} typeSpeed={30} />
                </div>
            </div>    
        </div>
    </div>
    );
}

export default AboutUsPage;