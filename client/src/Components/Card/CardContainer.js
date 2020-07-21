import {connect} from 'react-redux';
import Card from './Card';
import {getNewsThunkCreator} from './../../reducers/NewsReducer';

const mapStateToProps = (state) => {
    let newsTitles = state.NewsBrunch.newsTitles;

    return {
        newsTitles: newsTitles,
    };
}

let Compose = connect(mapStateToProps, {getNewsThunkCreator})(Card);

export default Compose;