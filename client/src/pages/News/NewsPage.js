import React, {useState} from 'react';
import s from './News.module.css';
import CardContainer from './../../Components/Card/CardContainer';

export default function NewsPage(props) {
    let [page, setPage] = useState(0);

    const editPage = (numOfPage) => {
        setPage(numOfPage);
    }

    return (<>
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
        <div className={s.mother__page_button__wrapper}>
            {   new Array(11).join('0').split('').map((x, i) => {
                    return <span 
                            onClick={(e) => editPage(e, i)}
                            className={s.page_button__wrapper}>{i+1}
                        </span>
                })
            }    
        </div>
        </>
    );
}