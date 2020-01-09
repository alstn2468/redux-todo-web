import React from "react";
import PropTypes from "prop-types";
import actionCreators from "../redux/action";
import { connect } from "react-redux";

function Todo({ item, dispatch }) {
    function handleOnclick(event) {
        dispatch(actionCreators.changeTodoItemCompleted(item));
    }

    return (
        <div>
            {item.isCompleted.toString()} / {item.id} / {item.text}
            <button onClick={event => handleOnclick(event)}>
                {item.isCompleted ? "COMPLETED" : "UNCOMPLETED"}
            </button>
        </div>
    );
}

Todo.propTypes = {
    item: PropTypes.objectOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            isCompleted: PropTypes.bool.isRequired
        })
    ).isRequired
};

export default connect()(Todo);
