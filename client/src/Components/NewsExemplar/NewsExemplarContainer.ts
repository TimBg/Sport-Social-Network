import NewsExemplar from './NewsExemplar';
import {connect} from 'react-redux';

const mapStateToProps = (state: any) => {
    return {};
}

const NewsExemplarContainer = connect(mapStateToProps, {})(NewsExemplar)

export default NewsExemplarContainer;