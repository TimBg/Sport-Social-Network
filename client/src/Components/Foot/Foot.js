import React from 'react';
import s from './Foot.module.css';

const Foot = () => {
    return (<div className={s.foot__wrapper}>
        <div className={s.foot__item}>
        <span className={s.foot__item}>&copy; {new Date().getFullYear()} SportStats, Inc.</span>
        </div>
    </div>)
}

export default Foot;