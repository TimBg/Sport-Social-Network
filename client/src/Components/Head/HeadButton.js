import React from 'react';
import s from './HeadButton.module.css';
import {NavLink} from 'react-router-dom';
import cn from 'classnames';

function HeadButton(props) {
    return (
        <div className={s["link-wrapper_header_user"]}>
            <NavLink className={s["text-link"]} to={props.store.Categories[props.numOfButton]}>
                <div className={cn(s.text, s.text_header)}>
                    {props.store.Headings[props.numOfButton]}
                </div>
            </NavLink>
        </div>
    );
}

export default HeadButton;