let _ = require('lodash');

let initialState = {
    userImage: 'https://www.iconfinder.com/data/icons/man-user-human-person-business-profile-avatar/100/20A-1User-512.png',
};

//Action types:
const SET_USER_PHOTO = 'SET_USER_PHOTO';


export type initialStateUserType = {
    userImage: string | File
};

let UserReducer = (state: initialStateUserType = initialState, action: any): initialStateUserType => {
    switch (action.type) {
        case SET_USER_PHOTO:
            return { ...state, userImage: action.photo };
    }
    return state;
}



export const editUserPhoto = (newPhoto: File): editUserPhotoType => {
    return {
        type: SET_USER_PHOTO,
        photo: newPhoto
    }
}

type editUserPhotoType = {
    type: string,
    photo: File
}



export default UserReducer;