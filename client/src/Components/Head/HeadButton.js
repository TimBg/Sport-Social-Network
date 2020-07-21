import React from 'react';
import s from './HeadButton.module.css';
import {NavLink} from 'react-router-dom';

function HeadButton(props) {
    const category = ['/', '/about', 'faq', '/news', '/log', 'reg'];

    return (
        <div className={s.head__item}>
            <NavLink to={category[props.numOfButton]}>
                <div className={s.HeadButton}>
                    {props.store.Headings[props.numOfButton]}
                </div>
            </NavLink>
        </div>
    );
}

export default HeadButton;