import React from 'react';
import s from './Card.module.css';
import cn from 'classnames';
import {MainReturn} from './CardContainer';

const Card: React.FC<MainReturn> = ({ textOfNewsPage, pageOfNews, positionOfCard }): JSX.Element => {
    let classOffCard = '';

    if(positionOfCard === "0") {
        classOffCard = s['card-wrapper0'];
    } else if(positionOfCard === "1") {
        classOffCard = cn(s['simple-card-wrapper'], s['card-wrapper1']);
    } else if(positionOfCard === "2") {
        classOffCard = cn(s['simple-card-wrapper'], s['card-wrapper2']);
    } else if(positionOfCard === "3") {
        classOffCard = cn(s['simple-card-wrapper'], s['card-wrapper3']);
    } else if(positionOfCard === "4") {
        classOffCard = cn(s['simple-card-wrapper'], s['card-wrapper4']);
    } else if(positionOfCard === "10") {
        classOffCard = s['card-wrapper10'];
    } else if(positionOfCard === "5") {
        classOffCard = cn(s['simple-card-wrapper'], s['card-wrapper5']);
    } else if(positionOfCard === "6") {
        classOffCard = cn(s['simple-card-wrapper'], s['card-wrapper6']);
    } 

    return (
        <div>
            <a href='#'>
                <div className={ classOffCard }>
                    <span>
                        { textOfNewsPage[pageOfNews] } 
                    </span>
                </div>
            </a>
        </div>
    );
}

export default Card;