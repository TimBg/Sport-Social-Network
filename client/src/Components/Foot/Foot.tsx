import React from 'react';
import './Foot.css';
import { MainReturn } from './FootContainer';

const Foot: React.FC<MainReturn> = (): JSX.Element => {
    return (<div className='foot-wrapper'>
        <div className='foot-wrapper__item'>
            <span className='foot-wrapper__item'>&copy; {new Date().getFullYear()} SportStats, Inc.</span>
        </div>
    </div>)
}

export default Foot;