import React from 'react';
import s from './MainUser.module.css';

export default function MainUserPage(props) {
    return (
        <div onClick={props.logoutAttr}>
            <span>Main Page of User</span>
        </div>
    );
}