import Foot from './Foot';
import React from 'react';
import {connect} from 'react-redux';

class FootContainer extends React.Component {

    componentDidMount() {}

    render() {
        return <Foot />;
    }
} 

const mapStateToProps = state => {
    return {};
}

const Footer = connect(mapStateToProps, {})(FootContainer)

export default Footer;