import React from "react";
import actionCreators from "redux/action";

function CompleteChangeButton({ dispatch, item }) {
    function onClickCompletedStatusButton() {
        dispatch(actionCreators.changeTodoItemCompleted(item));
    }

    return (
        <button onClick={() => onClickCompletedStatusButton()}>
            {item.isCompleted ? "COMPLETED" : "UNCOMPLETED"}
        </button>
    );
}

export default CompleteChangeButton;
