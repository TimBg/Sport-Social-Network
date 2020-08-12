import React from 'react';
import s from './HeadButton.module.css';
import {NavLink} from 'react-router-dom';

function HeadButton(props: any) {
    return (
            <NavLink className={s["link-wrapper-header-user"]} to={props.store.Categories[props.numOfButton]}>
                <div>
                    {props.store.Headings[props.numOfButton]}
                </div>
            </NavLink>
    );
}

export default HeadButton;