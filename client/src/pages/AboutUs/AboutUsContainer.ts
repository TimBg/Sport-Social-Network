import AboutUsPage from './AboutUsPage';
import {connect} from 'react-redux';

const mapStateToProps = (state: any): Object => {
    return {};
}

const AboutUsContainer = connect(mapStateToProps, {})(AboutUsPage);

export default AboutUsContainer;