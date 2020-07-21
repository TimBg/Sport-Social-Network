import React from 'react';
import HeadButton from './HeadButton';
import {NavLink} from 'react-router-dom';
import s from './Head.module.css';
import logo2 from '../../assets/images/logo2.jpg';

const Head = (props) => {
    return ( <div className={s.head__wrapper}>
        <div className={s.head__section}>
            <div className={s.head__logo}>
                <NavLink to="/">    
                    <img width="20px" height="20px" src={logo2} alt="img" />
                </NavLink>    
            </div>  
            <HeadButton store={props} numOfButton='0'/>
            <HeadButton store={props} numOfButton='1'/>
            <HeadButton store={props} numOfButton='2'/>
            <HeadButton store={props} numOfButton='3'/>
        </div>
        <div className={s.head__section}>
            <HeadButton store={props} numOfButton='4'/>
            <HeadButton store={props} numOfButton='5'/>
        </div>
    </div>)
}

export default Head;