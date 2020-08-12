import React from 'react';
import s from './Card.module.css';
import cn from 'classnames';

export default function Card(props: any) {
    let classOffCard = '';

    if(props.positionOfCard === "0") {
        classOffCard = s['card-wrapper0'];
    } else if(props.positionOfCard === "1") {
        classOffCard = cn(s['simple-card-wrapper'], s['card-wrapper1']);
    } else if(props.positionOfCard === "2") {
        classOffCard = cn(s['simple-card-wrapper'], s['card-wrapper2']);
    } else if(props.positionOfCard === "3") {
        classOffCard = cn(s['simple-card-wrapper'], s['card-wrapper3']);
    } else if(props.positionOfCard === "4") {
        classOffCard = cn(s['simple-card-wrapper'], s['card-wrapper4']);
    } else if(props.positionOfCard === "10") {
        classOffCard = s['card-wrapper10'];
    } else if(props.positionOfCard === "5") {
        classOffCard = cn(s['simple-card-wrapper'], s['card-wrapper5']);
    } else if(props.positionOfCard === "6") {
        classOffCard = cn(s['simple-card-wrapper'], s['card-wrapper6']);
    } 

    return (
        <div>
            <a href="#">
                <div className={classOffCard}>
                    <span>
                        {props.textOfNewsPage[props.pageOfNews]} 
                    </span>
                </div>
            </a>
        </div>
    );
}