import {connect} from 'react-redux';
import Card from './Card';

const mapStateToProps = (state) => {
    let textOfNewsPage = state.NewsBrunch.textOfNewsPage;

    return {
        textOfNewsPage: textOfNewsPage,
    };
}

let CardContainer = connect(mapStateToProps, {})(Card);

export default CardContainer;