import React, { useState } from 'react';
import './MainUser.css';
import { MainReturn } from './MainUserContainer';
import { Grid } from '@material-ui/core';
import { editUserPhoto } from './../../reducers/UserReducer';

const MainUserPage: React.FC<MainReturn> = ({ store }): JSX.Element => {
    //types
    type InputEvent = React.ChangeEvent<HTMLInputElement>;

    //properties
    const userImage: string | File = store.getState().UserBranch.userImage;
    const dispatch = store.dispatch;

    //other variables
    const userPhotoUrl: string = 'https://www.iconfinder.com/data/icons/man-user-human-person-business-profile-avatar/100/20A-1User-512.png';

    //handlers
    const userPhotoHandler = (e: InputEvent | null) => {
        if (e && e.target && e.target.files && e.target.files[0]) {
            setUserPhoto(e.target.files[0]);
        }
    }

    //hooks
    const [userPhoto, setUserPhoto] = useState<string | File>(userPhotoUrl);

    return (
        <div className='main-user'>
            <div className='main-user__wrapper'>
                <Grid container spacing={2}>
                    <Grid item xs={3}>

                        {typeof userPhoto === 'string' ? <img src={userPhoto} className='main-user__img' /> : userPhoto}
                        <div className='main-user__input-wrapper'>
                            <input type='file' accept='image/*' onChange={userPhotoHandler} />
                        </div>
                        <span></span>

                    </Grid>
                    <Grid item xs={9}>

                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

/*
<div className='main-user-wrapper'>
        <div className='top-user-page'>
            <div className='top-user-page__photo'>
                <img src='' alt='' />
                <span>Name Surname</span>
                <button>Edit Profile</button>
                <a href=''>follovers</a>
                <a href=''>following</a>
            </div>
            <div className='top-user-page__about'>
                <span>kind of sports: boxing</span>
            </div>
        </div>
        <div className='mid-user-page'>
        </div>
    </div>);
*/

export default MainUserPage;