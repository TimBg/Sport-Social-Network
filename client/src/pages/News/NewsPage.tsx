import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './News.css';
import CardContainer from './Card/CardContainer';
import { MainReturn } from './NewsContainer';

const NewsPage: React.FC<MainReturn> = function ({ store }): JSX.Element {
    let [page, setPage] = useState<number>(0);

    const editPage = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, numOfPage: number) => {
        setPage(numOfPage);
    }

    return (<>
        <div className='news-button-wrapper'>
            {new Array(11).join('0').split('').map((x: string, i: number) => {
                return (<NavLink
                    to='#'
                    onClick={(e) => editPage(e, i)}
                    className={i === page ? 'news-button-wrapper__active' : 'news-button-wrapper__normal'}
                >{i + 1}
                </NavLink>)
            })
            }
        </div>
        <div className='news-wrapper'>
            <div className='news-wrapper__cards'>
                {/* Set to lowerDiv, when problem will be solved - onClick={props.getNewsThunkCreator}*/}
                <div className='news-wrapper__section'>
                    <CardContainer pageOfNews={page} positionOfCard={'10'} />
                    <div className='news-wrapper__one'>
                        <CardContainer pageOfNews={page} positionOfCard={'1'} />
                        <CardContainer pageOfNews={page} positionOfCard={'2'} />
                        <CardContainer pageOfNews={page} positionOfCard={'3'} />
                        <CardContainer pageOfNews={page} positionOfCard={'4'} />
                    </div>
                </div>
                <div className='news-wrapper__section'>
                    <CardContainer pageOfNews={page} positionOfCard={'0'} />
                    <CardContainer pageOfNews={page} positionOfCard={'0'} />
                    <CardContainer pageOfNews={page} positionOfCard={'0'} />
                    <CardContainer pageOfNews={page} positionOfCard={'0'} />
                    <CardContainer pageOfNews={page} positionOfCard={'0'} />
                    <CardContainer pageOfNews={page} positionOfCard={'0'} />
                    <CardContainer pageOfNews={page} positionOfCard={'0'} />
                    <CardContainer pageOfNews={page} positionOfCard={'0'} />
                </div>
                <div className='news-wrapper__section'>
                    <CardContainer pageOfNews={page} positionOfCard={'10'} />
                    <div className='news-wrapper__one'>
                        <CardContainer pageOfNews={page} positionOfCard={'1'} />
                        <CardContainer pageOfNews={page} positionOfCard={'2'} />
                        <CardContainer pageOfNews={page} positionOfCard={'3'} />
                        <CardContainer pageOfNews={page} positionOfCard={'4'} />
                    </div>
                </div>
                <div className='news-wrapper__section'>
                    <CardContainer pageOfNews={page} positionOfCard={'0'} />
                    <CardContainer pageOfNews={page} positionOfCard={'0'} />
                    <CardContainer pageOfNews={page} positionOfCard={'0'} />
                    <CardContainer pageOfNews={page} positionOfCard={'0'} />
                    <CardContainer pageOfNews={page} positionOfCard={'0'} />
                    <CardContainer pageOfNews={page} positionOfCard={'0'} />
                    <CardContainer pageOfNews={page} positionOfCard={'0'} />
                    <CardContainer pageOfNews={page} positionOfCard={'0'} />
                </div>
                <br />
                <br />
            </div>
        </div>
    </>
    );
}

export default NewsPage;