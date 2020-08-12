import Foot from './Foot';
import {connect} from 'react-redux';

const mapStateToProps = (state: any): Object => {
    return {};
}

const FootContainer = connect(mapStateToProps, {})(Foot)

export default FootContainer;