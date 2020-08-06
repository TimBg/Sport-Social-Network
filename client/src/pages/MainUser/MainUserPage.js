import React from 'react';
import s from './MainUser.module.css';
import cn from 'classnames';

export default function MainUserPage(props) {
    return (<div className={s["main-user-wrapper"]}>
        <div className={s["top-user-page"]}>
            <div className={s['top-user-page__photo']}>
                <img src="" alt=""/>
                <span>Name Surname</span>
                <button>Edit Profile</button>
                <a href="">follovers</a>
                <a href="">following</a>
            </div>
            <div className={s['top-user-page__about']}>
                <span>kind of sports: boxing</span>
            </div>
        </div>
        <div className={s["mid-user-page"]}>
        </div>
    </div>);
}