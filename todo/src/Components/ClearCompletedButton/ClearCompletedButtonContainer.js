import React from "react";
import ClearCompletedButtonComponent from "Components/ClearCompletedButton/ClearCompletedButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchClearCompletedTodoItem } from "actions/todoAction";

function ClearCompletedButtonContainer() {
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector((state) => state.authReducer);

    function onClickClearCompletedButton() {
        dispatch(fetchClearCompletedTodoItem());
    }

    return (
        <ClearCompletedButtonComponent
            isLoggedIn={isLoggedIn}
            onClick={onClickClearCompletedButton}
        />
    );
}

export default ClearCompletedButtonContainer;
