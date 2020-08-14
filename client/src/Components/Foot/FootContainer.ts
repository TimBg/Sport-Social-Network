import Foot from './Foot';
import {connect} from 'react-redux';
import {RootStateType} from './../../redux/store';

type MSTPReturn = {};

type MDTPReturn = {};

type OWNReturn = {};

export type MainReturn = MSTPReturn & MDTPReturn & OWNReturn;

const mapStateToProps = (state: RootStateType): MSTPReturn => {
    return {};
}

const FootContainer = connect<MSTPReturn, MDTPReturn, OWNReturn, RootStateType>(mapStateToProps, {})(Foot)

export default FootContainer;