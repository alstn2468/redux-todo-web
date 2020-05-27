import { connect } from 'react-redux';
import TodoCounterComponent from './TodoCounterComponent';

function mapStateToProps(state) {
    return state.todoReducer;
}

export default connect(mapStateToProps)(TodoCounterComponent);
