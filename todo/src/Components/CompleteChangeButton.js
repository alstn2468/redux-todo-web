import React from "react";
import actionCreators from "redux/action";

function CompleteChangeButton({ dispatch, item, flag }) {
    function onClickCompletedStatusButton() {
        dispatch(actionCreators.changeTodoItemCompleted(item));
    }

    return (
        <button onClick={() => onClickCompletedStatusButton()} disabled={flag}>
            {item.isCompleted ? "COMPLETED" : "UNCOMPLETED"}
        </button>
    );
}

export default CompleteChangeButton;
