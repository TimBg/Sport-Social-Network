import FriendCard from './FriendCard';
import {connect} from 'react-redux';
import {RootStateType, StoreWrapperType, StoreType} from './../../redux/store';

type MSTPReturn = {};

type MDTPReturn = {};

type OWNReturn = {
    store: StoreType
}

export type MainReturn = MSTPReturn & MDTPReturn & OWNReturn;

const mapStateToProps = (state: RootStateType): MSTPReturn => {
    return {};
}

const FrendCardContainer = connect<MSTPReturn, MDTPReturn, OWNReturn, RootStateType>(mapStateToProps, {})(FriendCard);

export default FrendCardContainer;