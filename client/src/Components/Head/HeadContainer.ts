import Head from './Head';
import {connect} from 'react-redux';
import {RootStateType} from './../../redux/store';
import {Logout} from '../../hooks/auth.hook';
import {initialStateHeadType} from './../../reducers/HeadReducer';

type MSTPReturn = initialStateHeadType;

type MDTPReturn = {};

type OWNReturn = {
    isAuth: boolean
    logoutAttr?: Logout
}

export type MainReturn = MSTPReturn & MDTPReturn & OWNReturn;

const mapStateToProps = (state: RootStateType): MSTPReturn => {
    return {
        Headings: state.HeadBranch.Headings,
        Categories: state.HeadBranch.Categories
    };
}

const HeadContainer = connect<MSTPReturn, MDTPReturn, OWNReturn, RootStateType>(mapStateToProps, {})(Head);

export default HeadContainer;