import NewsPage from './NewsPage';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {};
}

const NewsContainer = connect(mapStateToProps, {})(NewsPage);

export default NewsContainer;