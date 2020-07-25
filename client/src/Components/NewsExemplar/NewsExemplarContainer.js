import NewsExemplar from './NewsExemplar';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {};
}

const NewsExemplarContainer = connect(mapStateToProps, {})(NewsExemplar)

export default NewsExemplarContainer;