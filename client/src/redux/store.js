import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

let Reducers = combineReducers({
    brunch1: () => {return null},
    brunch2: () => {return null},
    brunch3: () => {return null},
});

const store = createStore(Reducers, applyMiddleware(thunkMiddleware));

export default store;