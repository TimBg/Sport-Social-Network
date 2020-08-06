import React from 'react';
import HeadButton from './HeadButton';
import {NavLink} from 'react-router-dom';
import s from './Head.module.css';
import q from './HeadButton.module.css';
import logo2 from '../../assets/images/logo2.jpg';
import cn from 'classnames';

const Head = (props) => {
    if(props.isAuth) {
        return ( <div className={cn(s.header, s.header_visitor)}>
        <div className={s.header__section}>
            <div className={s["header-logo"]}>
                <NavLink to="/user/1">    
                    <img width="20px" height="20px" src={logo2} alt="img" />
                </NavLink>    
            </div> 
            <HeadButton store={props} numOfButton='6'/>
            <HeadButton store={props} numOfButton='7'/>
            <HeadButton store={props} numOfButton='8'/>
            <HeadButton store={props} numOfButton='9'/>
            <HeadButton store={props} numOfButton='10'/>
        </div>
        <div className={q.header__section}>
            <div>
                <NavLink className={q["link-wrapper-header-user"]} onClick={props.logoutAttr} to=''>
                    {props.Headings[11]}
                </NavLink>
            </div>
        </div>
    </div>)
    } 

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