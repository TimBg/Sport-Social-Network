import React from 'react';
import s from './Card.module.css';

export default function Card(props) {
    return (
        <div class={s.row__wrapper}>
            <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                <a href="#">
                    <div class="card-action">
                        <span>NewsNewsNewsNewsNews
                        NewsNewsNewsNewsNewsNews
                        NewsNewsNewsNewsNewsNewsNews
                        NewsNewsNewsNewsNewsNews
                        </span>
                    </div>
                </a>
                </div>
            </div>
      </div>
    );
}