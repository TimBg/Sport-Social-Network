import Head from './Head';
import React from 'react';
import {connect} from 'react-redux';

class HeadContainer extends React.Component {

    componentDidMount() {}

    render() {
        return <Head {...this.props}/>
    }
} 

const mapStateToProps = state => {
    return {Headings: state.HeadBrunch.Headings};
}

const Header = connect(mapStateToProps, {})(HeadContainer);

export default Header;