import React from 'react';
import HeadButton from './HeadButton';
import s from './Head.module.css';

const Head = (props) => {
    return ( <div className={s.head__wrapper}>
        <div className={s.head__section}>
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