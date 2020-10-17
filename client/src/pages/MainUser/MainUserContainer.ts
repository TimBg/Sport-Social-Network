import MainUserPage from './MainUserPage';
import { connect } from 'react-redux';
import { RootStateType, StoreType } from './../../redux/store';

type MSTPReturn = {
    store: StoreType
};

type MDTPReturn = {};

type OWNReturn = {};

export type MainReturn = MSTPReturn & MDTPReturn & OWNReturn;

const mapStateToProps = (state: RootStateType): MSTPReturn => {
    //@ts-ignore
    return {
    };
}

const MainUserContainer = connect<MSTPReturn, MDTPReturn, OWNReturn, RootStateType>(mapStateToProps, {})(MainUserPage)

export default MainUserContainer;