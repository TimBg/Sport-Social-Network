import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import HeadReducer from './../reducers/HeadReducer';
import NewsReducer from '../reducers/NewsReducer';

let Reducers = combineReducers({
    HeadBrunch: HeadReducer,
    NewsBrunch: NewsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;