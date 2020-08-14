import {connect} from 'react-redux';
import Card from './Card';
import {RootStateType} from './../../../redux/store';

type MSTPReturn = {
    textOfNewsPage: string[]
};

type MDTPReturn = {};

type OWNReturn = {
    pageOfNews: number
    positionOfCard: string
};

export type MainReturn = MSTPReturn & MDTPReturn & OWNReturn;

const mapStateToProps = (state: RootStateType): MSTPReturn => {
    const textOfNewsPage = state.NewsBranch.textOfNewsPage;

    return {
        textOfNewsPage: textOfNewsPage,
    };
}

let CardContainer = connect<MSTPReturn, MDTPReturn, OWNReturn, RootStateType>(mapStateToProps, {})(Card);

export default CardContainer;