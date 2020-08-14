import AboutUsPage from './AboutUsPage';
import {connect} from 'react-redux';
import {RootStateType} from './../../redux/store';

type MSTPReturn = {};

type MDTPReturn = {};

type OWNReturn = {};

export type MainReturn = MSTPReturn & MDTPReturn & OWNReturn;

const mapStateToProps = (state: RootStateType): MSTPReturn => {
    return {};
}

const AboutUsContainer = connect<MSTPReturn, MDTPReturn, OWNReturn, RootStateType>(mapStateToProps, {})(AboutUsPage);

export default AboutUsContainer;