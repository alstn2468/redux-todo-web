import React from "react";
import actionCreators from "redux/action";

function DeleteButton({ dispatch, item, flag }) {
    function onClickDeleteButton() {
        dispatch(actionCreators.deleteTodoItem(item));
    }

    return (
        <button onClick={() => onClickDeleteButton()} disabled={flag}>
            DELETE
        </button>
    );
}

export default DeleteButton;
