import React from 'react';
import s from './News.module.css';
import Card from './../../Components/Card/Card';

export default function NewsPage(props) {
    return (
        <div>
            {new Array(10).join('0').split('').map((x, i) => x = (
                <div className={s.line__wrapper} key={i}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>))
            }
        </div>    
    );
}