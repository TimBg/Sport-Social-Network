import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import HeadReducer from '../reducers/HeadReducer';
import NewsReducer from '../reducers/NewsReducer';
import UserReducer from '../reducers/UserReducer';

let Reducers = combineReducers({
    HeadBranch: HeadReducer,
    NewsBranch: NewsReducer,
    UserBranch: UserReducer,
});

type RootReducerType = typeof Reducers;
export type RootStateType = ReturnType<RootReducerType>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

const StoreWrapper = {store: store};
export type StoreWrapperType = typeof StoreWrapper;

export default store;