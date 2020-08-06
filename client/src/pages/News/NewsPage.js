import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import s from './News.module.css';
import CardContainer from './Card/CardContainer';
import cn from 'classnames';

export default function NewsPage(props) {
    let [page, setPage] = useState(0);

    const editPage = (e, numOfPage) => {
        setPage(numOfPage);
    }
    return (<>
        <div className={s["news-button-wrapper"]}>
            {   new Array(11).join('0').split('').map((x, i) => {
                    return (<NavLink
                            to="#"
                            onClick={(e) => editPage(e, i)}
                            className={i === page ? s["news-button-wrapper__active"] : s["news-button-wrapper__normal"]}
                            >{i+1}
                            </NavLink>)
                })
            }    
        </div>
        <div className={s["news-wrapper"]}>
            <div className={s["news-wrapper__cards"]}>
                {/* Set to lowerDiv, when problem will be solved - onClick={props.getNewsThunkCreator}*/}
                <div className={s["news-wrapper__section"]}>
                    <CardContainer pageOfNews={page} positionOfCard={"10"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"1"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"2"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"3"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"4"} store={props.store}/>
                </div>
                <div className={s["news-wrapper__section"]}>
                    <CardContainer pageOfNews={page} positionOfCard={"0"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"0"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"0"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"0"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"0"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"0"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"0"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"0"} store={props.store}/>
                </div>
                <div className={cn(s["news-wrapper__section"], s["news-wrapper__section_third"])}>
                    <CardContainer pageOfNews={page} positionOfCard={"2"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"1"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"10"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"5"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"6"} store={props.store}/>
                </div>
                <div className={s["news-wrapper__section"]}>
                    <CardContainer pageOfNews={page} positionOfCard={"0"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"0"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"0"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"0"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"0"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"0"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"0"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"0"} store={props.store}/>
                </div>
                <br/>
                <br/>
            </div>
        </div> 
        </>
    );
}