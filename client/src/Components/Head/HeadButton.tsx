import React from 'react';
import './HeadButton.css';
import { NavLink } from 'react-router-dom';
import { initialStateHeadType } from './../../reducers/HeadReducer';

type MSTPReturn = initialStateHeadType;

type HeadButtonOwnType = {
    numOfButton: string
}

type HeadButtonType = HeadButtonOwnType & MSTPReturn;

const HeadButton: React.FC<HeadButtonType> = ({ Headings, Categories, numOfButton }): JSX.Element => {
    const editNumOfButton = Number(numOfButton);

    return (
        <NavLink className='link-wrapper-header-user' to={Categories[editNumOfButton]}>
            <div>
                {Headings[editNumOfButton]}
            </div>
        </NavLink>
    );
}

export default HeadButton;