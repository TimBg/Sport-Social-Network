import MainUserPage from './MainUserPage';
import {connect} from 'react-redux';

const mapStateToProps = (state: any): Object => {
    return {};
}

const MainUserContainer = connect(mapStateToProps, {})(MainUserPage);

export default MainUserContainer;