import React from 'react';
import s from './HeadButton.module.css';
import {NavLink} from 'react-router-dom';

function HeadButton(props) {
    const category = ['/', '/about', 'faq', '/news', '/log', 'reg'];

    return (
        <div className={s.head__item}>
            <NavLink to={category[props.numOfButton]}>
                {props.store.Headings[props.numOfButton]}
            </NavLink>
        </div>
    );
}

export default HeadButton;