import React from 'react';
import s from './News.module.css';
import CardContainer from './../../Components/Card/CardContainer';

export default function NewsPage(props) {
    return (
        <div className={s.main__news__wrapper}>
            <div className={s.line__wrapper}>
                <div className={s.line__wrapper1}>
                    <CardContainer positionOfCard={"1"} store={props.store}/>
                    <CardContainer positionOfCard={"10"} store={props.store}/>
                    <CardContainer positionOfCard={"2"} store={props.store}/>
                    <CardContainer positionOfCard={"3"} store={props.store}/>
                    <CardContainer positionOfCard={"4"} store={props.store}/>
                </div>
                <br />
                <div className={s.line__wrapper2}>
                    <CardContainer positionOfCard={"0"} store={props.store}/>
                    <CardContainer positionOfCard={"0"} store={props.store}/>
                    <CardContainer positionOfCard={"0"} store={props.store}/>
                    <CardContainer positionOfCard={"0"} store={props.store}/>
                    <CardContainer positionOfCard={"0"} store={props.store}/>
                    <CardContainer positionOfCard={"0"} store={props.store}/>
                    <CardContainer positionOfCard={"0"} store={props.store}/>
                    <CardContainer positionOfCard={"0"} store={props.store}/>
                </div>
                <br />
                <div className={s.line__wrapper3}>
                    <CardContainer positionOfCard={"2"} store={props.store}/>
                    <CardContainer positionOfCard={"1"} store={props.store}/>
                    <CardContainer positionOfCard={"4"} store={props.store}/>
                    <CardContainer positionOfCard={"3"} store={props.store}/>
                    <CardContainer positionOfCard={"10"} store={props.store}/>
                </div>
                <br />
                <div className={s.line__wrapper2}>
                    <CardContainer positionOfCard={"0"} store={props.store}/>
                    <CardContainer positionOfCard={"0"} store={props.store}/>
                    <CardContainer positionOfCard={"0"} store={props.store}/>
                    <CardContainer positionOfCard={"0"} store={props.store}/>
                    <CardContainer positionOfCard={"0"} store={props.store}/>
                    <CardContainer positionOfCard={"0"} store={props.store}/>
                    <CardContainer positionOfCard={"0"} store={props.store}/>
                    <CardContainer positionOfCard={"0"} store={props.store}/>
                </div>
            </div>
        </div>    
    );
}