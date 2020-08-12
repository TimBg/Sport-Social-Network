import NewsPage from './NewsPage';
import {connect} from 'react-redux';
import {getNewsThunkCreator} from '../../reducers/NewsReducer';

const mapStateToProps = (state: any): Object => {
    return {};
}

const NewsContainer = connect(mapStateToProps, {getNewsThunkCreator})(NewsPage);

export default NewsContainer;