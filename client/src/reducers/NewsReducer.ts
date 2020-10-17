import { getSportNewsAPI } from '../API/api';
import { RootStateType } from '../redux/store';
import { ThunkAction } from 'redux-thunk';

let _ = require('lodash');

type initialStateNewsType = {
    newsTitles: Array<number>
    textOfNewsPage: Array<string>
    status: string,
}

let initialState: initialStateNewsType = {
    newsTitles: new Array(40).join('0').split('').map((x, i) => i),
    textOfNewsPage: ['Some information', '23423423423424', '0000000000000', '232', '5', '6', '7', '8', '9', '10'],
    status: '---'
};

let NewsReducer = (state = initialState, action: ActionsTypes): initialStateNewsType => {
    let stateCopy;

    switch (action.type) {
        case 'SET_NEWS_TITLES':
            {
                let newState = _.cloneDeep(state);
                //newState.newsTitles = action.articles.map(x => x.title);
                newState.newsTitles = action.articles;
                stateCopy = newState;
            }; return stateCopy;
        case 'SET_NEWS_TEXTS':
            {
                let newState = _.cloneDeep(state);
                stateCopy = newState;
            }; return stateCopy;
        default:
            break;
    }
    return state;
}

export default NewsReducer;

type ThunkType = ThunkAction<Promise<void>, RootStateType, unknown, ActionsTypes>;

type ActionsTypes = SetNewsTextsType | SetNewsTitlesType;

type SetNewsTitlesType = {
    type: 'SET_NEWS_TITLES'
    articles: any
}

export const setNewsTitles = (articles: any): SetNewsTitlesType => {
    return {
        type: 'SET_NEWS_TITLES',
        articles: articles
    }
}


type SetNewsTextsType = {
    type: 'SET_NEWS_TEXTS'
}

export const setNewsTexts = (response: any): SetNewsTextsType => {
    return {
        type: 'SET_NEWS_TEXTS',
    }
}

export const getNewsThunkCreator = (e: Object): ThunkType => {
    return async (dispatch, getState) => {
        getSportNewsAPI().then((response: Object) => {
            // dispatch(setNewsTitles(response));   
            dispatch(setNewsTexts(response));
        })
    }
}