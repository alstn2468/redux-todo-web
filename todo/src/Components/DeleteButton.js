import React from "react";
import actionCreators from "redux/action";

function DeleteButton({ dispatch, item }) {
    function onClickDeleteButton() {
        dispatch(actionCreators.deleteTodoItem(item));
    }

    return <button onClick={() => onClickDeleteButton()}>DELETE</button>;
}

export default DeleteButton;
