import {getSportNewsAPI} from '../API/api';

let _ = require('lodash');

let initialState = {
    newsTitles: new Array(40).join('0').split('').map((x, i) => i),
    textOfNewsPage: ['123124124124124', '23423423423424','0000000000000', '232', '5','6','7','8','9','10'],
    status: '---'
};

let NewsReducer = (state = initialState, action) => {
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


export const setNewsTitles = (articles) => {
    return {
        type: 'SET_NEWS_TITLES',
        articles: articles
    }
}

export const setNewsTexts = (response) => {
    return {
        type: 'SET_NEWS_TEXTS',
    }
}

export const getNewsThunkCreator = (e) => {
    return (dispatch) => {
        getSportNewsAPI().then(response => {
           // dispatch(setNewsTitles(response));   
            dispatch(setNewsTexts(response));              
        })
    }
}