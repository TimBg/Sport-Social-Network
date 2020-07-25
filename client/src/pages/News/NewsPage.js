import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import s from './News.module.css';
import CardContainer from './Card/CardContainer';

export default function NewsPage(props) {
    let [page, setPage] = useState(0);

    const editPage = (e, numOfPage) => {
        setPage(numOfPage);
    }
    return (<>
        <div className={s.mother__page_button__wrapper}>
            {   new Array(11).join('0').split('').map((x, i) => {
                    return (<NavLink
                            to="#"
                            onClick={(e) => editPage(e, i)}
                            className={i === page ? s.actual_page_button__wrapper : s.page_button__wrapper}
                            >{i+1}
                            </NavLink>)
                })
            }    
        </div>
        <div className={s.main__news__wrapper}>
            <div className={s.line__wrapper}>
                <div className={s.line__wrapper1}>
                    <CardContainer pageOfNews={page} positionOfCard={"1"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"10"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"2"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"3"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"4"} store={props.store}/>
                </div>
                <br />
                <div className={s.line__wrapper2}>
                    <CardContainer pageOfNews={page} positionOfCard={"0"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"0"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"0"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"0"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"0"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"0"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"0"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"0"} store={props.store}/>
                </div>
                <br />
                <div className={s.line__wrapper3}>
                    <CardContainer pageOfNews={page} positionOfCard={"2"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"1"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"4"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"3"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"10"} store={props.store}/>
                </div>
                <br />
                <div className={s.line__wrapper2}>
                    <CardContainer pageOfNews={page} positionOfCard={"0"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"0"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"0"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"0"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"0"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"0"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"0"} store={props.store}/>
                    <CardContainer pageOfNews={page} positionOfCard={"0"} store={props.store}/>
                </div>
            </div>
        </div> 
        </>
    );
}