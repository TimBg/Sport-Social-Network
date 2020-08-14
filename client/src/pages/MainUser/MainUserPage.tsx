import React from 'react';
import s from './MainUser.module.css';
import {MainReturn} from './MainUserContainer';

const MainUserPage: React.FC<MainReturn> = (): JSX.Element => {
    return (<div className={s['main-user-wrapper']}>
        <div className={s['top-user-page']}>
            <div className={s['top-user-page__photo']}>
                <img src='' alt=''/>
                <span>Name Surname</span>
                <button>Edit Profile</button>
                <a href=''>follovers</a>
                <a href=''>following</a>
            </div>
            <div className={s['top-user-page__about']}>
                <span>kind of sports: boxing</span>
            </div>
        </div>
        <div className={s['mid-user-page']}>
        </div>
    </div>);
}

export default MainUserPage;