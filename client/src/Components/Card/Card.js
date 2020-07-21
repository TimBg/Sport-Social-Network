import React from 'react';
import s from './Card.module.css';

export default function Card(props) {
    let classOffCard = "";

    if(props.positionOfCard === "0") {
        classOffCard = s.card__wrapper0;
    } else if(props.positionOfCard === "1") {
        classOffCard = s.card__wrapper1;
    } else if(props.positionOfCard === "2") {
        classOffCard = s.card__wrapper2;
    } else if(props.positionOfCard === "3") {
        classOffCard = s.card__wrapper3;
    } else if(props.positionOfCard === "4") {
        classOffCard = s.card__wrapper4;
    } else if(props.positionOfCard === "10") {
        classOffCard = s.card__wrapper10;
    } 

    return (
        <div>
            <a href="#">
                <div className={classOffCard}>
                    <span>
                        Lennox Lewis lists Evander Holyfield as his 
                        ‘toughest opponent’ ahead of Mike Tyson.      
                    </span>
                </div>
            </a>
        </div>
    );
}