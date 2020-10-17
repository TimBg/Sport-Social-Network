import React from 'react';
import './Card.css';
import { MainReturn } from './CardContainer';

const Card: React.FC<MainReturn> = ({ textOfNewsPage, pageOfNews, positionOfCard }): JSX.Element => {
    let classOffCard = '';

    if (positionOfCard === '0') {
        classOffCard = 'card-wrapper0';
    } else if (positionOfCard === '1') {
        classOffCard = 'simple-card-wrapper card-wrapper1';
    } else if (positionOfCard === '2') {
        classOffCard = 'simple-card-wrapper card-wrapper2';
    } else if (positionOfCard === '3') {
        classOffCard = 'simple-card-wrapper card-wrapper3';
    } else if (positionOfCard === '4') {
        classOffCard = 'simple-card-wrapper card-wrapper4';
    } else if (positionOfCard === '10') {
        classOffCard = 'card-wrapper10';
    } else if (positionOfCard === '5') {
        classOffCard = 'simple-card-wrapper card-wrapper5';
    } else if (positionOfCard === '6') {
        classOffCard = 'simple-card-wrapper card-wrapper6';
    }

    return (
        <div>
            <a href='#'>
                <div className={classOffCard}>
                    <span>
                        {textOfNewsPage[pageOfNews]}
                    </span>
                </div>
            </a>
        </div>
    );
}

export default Card;