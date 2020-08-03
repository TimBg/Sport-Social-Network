import React from 'react';
import HeadButton from './HeadButton';
import {NavLink} from 'react-router-dom';
import s from './Head.module.css';
import logo2 from '../../assets/images/logo2.jpg';
import cn from 'classnames';

const Head = (props) => {
    return ( <div className={cn(s.header, s.header_visitor)}>
        <div className={s.header__section}>
            <div className={s["header-logo"]}>
                <NavLink to="/">    
                    <img width="20px" height="20px" src={logo2} alt="img" />
                </NavLink>    
            </div> 
            <HeadButton store={props} numOfButton='0'/>
            <HeadButton store={props} numOfButton='1'/>
            <HeadButton store={props} numOfButton='2'/>
            <HeadButton store={props} numOfButton='3'/>
        </div>
        <div className={s.header__section}>
            <HeadButton store={props} numOfButton='4'/>
            <HeadButton store={props} numOfButton='5'/>
        </div>
    </div>)
}

export default Head;