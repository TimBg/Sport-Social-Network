import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import HeadReducer from './../reducers/HeadReducer';

let Reducers = combineReducers({
    HeadBrunch: HeadReducer,
    brunch2: () => {return null},
    brunch3: () => {return null},
});

const store = createStore(Reducers, applyMiddleware(thunkMiddleware));

export default store;