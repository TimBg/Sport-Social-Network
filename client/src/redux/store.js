import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import HeadReducer from './../reducers/HeadReducer';
import NewsReducer from '../reducers/NewsReducer';

let Reducers = combineReducers({
    HeadBrunch: HeadReducer,
    NewsBrunch: NewsReducer,
});

const store = createStore(Reducers, applyMiddleware(thunkMiddleware));

export default store;