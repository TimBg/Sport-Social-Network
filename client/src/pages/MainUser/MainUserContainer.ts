import MainUserPage from './MainUserPage';
import {connect} from 'react-redux';
import {RootStateType} from './../../redux/store';

type MSTPReturn = {};

type MDTPReturn = {};

type OWNReturn = {};

export type MainReturn = MSTPReturn & MDTPReturn & OWNReturn;

const mapStateToProps = (state: RootStateType): MSTPReturn => {
    return {};
}

const MainUserContainer = connect<MSTPReturn, MDTPReturn, OWNReturn, RootStateType>(mapStateToProps, {})(MainUserPage);

export default MainUserContainer;