import {connect} from 'react-redux';
import Card from './Card';
import {getNewsThunkCreator} from './../../reducers/NewsReducer';

const mapStateToProps = (state) => {
    let newsTitles = state.NewsBrunch.newsTitles;
    let pageOfNews= state.pageOfNews;

    return {
        newsTitles: newsTitles,
        pageOfNews: pageOfNews
    };
}

let Compose = connect(mapStateToProps, {getNewsThunkCreator})(Card);

export default Compose;