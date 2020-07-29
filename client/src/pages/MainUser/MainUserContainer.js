import MainUserPage from './MainUserPage';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {};
}

const MainUserContainer = connect(mapStateToProps, {})(MainUserPage);

export default MainUserContainer;