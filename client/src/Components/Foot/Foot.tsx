import React from 'react';
import s from './Foot.module.css';
import {MainReturn} from './FootContainer';

const Foot: React.FC<MainReturn> = (): JSX.Element => {
    return (<div className={s['foot-wrapper']}>
        <div className={s['foot-wrapper__item']}>
        <span className={s['foot-wrapper__item']}>&copy; {new Date().getFullYear()} SportStats, Inc.</span>
        </div>
    </div>)
}

export default Foot;