import { connect } from 'react-redux';
import LoadingOverlayComponent from './LoadingOverlayComponent';

function mapStateToProps(state) {
    return state.todoReducer;
}

export default connect(mapStateToProps)(LoadingOverlayComponent);
