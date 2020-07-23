import {connect} from 'react-redux';
import Card from './Card';
import {getNewsThunkCreator} from './../../reducers/NewsReducer';

const mapStateToProps = (state) => {
    let textOfNewsPage = state.NewsBrunch.textOfNewsPage;

    return {
        textOfNewsPage: textOfNewsPage,
    };
}

let Compose = connect(mapStateToProps, {getNewsThunkCreator})(Card);

export default Compose;