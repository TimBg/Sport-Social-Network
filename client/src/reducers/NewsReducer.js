import { getSportNews } from '../API/api';

let _ = require('lodash');

let initialState = {
    newsTitles: new Array(40).join('0').split('').map((x, i) => i),
    newsTexts: []
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
            newState.newsTitles = action.articles.map(x => x.content);
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

export const setNewsTexts = (articles) => {
    return {
        type: 'SET_NEWS_TEXTS',
        articles: articles
    }
}

export const getNewsThunkCreator = () => {
    /*return (dispatch) => {
        getSportNews().then(response => {
            dispatch(setNewsTitles(response.articles));   
            dispatch(setNewsTexts(response.articles));              
        })
    }*/
    let arr = new Array(50).join('0').split('').map((x, i) => (i+100));
    return (dispatch) => {
        dispatch(setNewsTitles(arr));              
    }
}