import { connect } from "react-redux";
import TodoCounterComponent from "Components/TodoCounter/TodoCounterComponent";

function mapStateToProps(state) {
    return state.todoReducer;
}

export default connect(mapStateToProps)(TodoCounterComponent);
