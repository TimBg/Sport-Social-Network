import NewsPage from './NewsPage';
import {connect} from 'react-redux';
import {getNewsThunkCreator} from '../../reducers/NewsReducer';
import {RootStateType} from './../../redux/store';

type MSTPReturn = {
    store: Object
};

type MDTPReturn = {
    getNewsThunkCreator: (e: Object) => Function
};

type OWNReturn = {};

export type MainReturn = MSTPReturn & MDTPReturn & OWNReturn;

const mapStateToProps = (state: RootStateType): MSTPReturn => {
    return {
        store: state.NewsBranch
    };
}

const NewsContainer = connect<MSTPReturn, MDTPReturn, OWNReturn, RootStateType>(mapStateToProps, {getNewsThunkCreator})(NewsPage);

export default NewsContainer;