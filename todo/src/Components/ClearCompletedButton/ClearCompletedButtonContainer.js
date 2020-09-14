import React, { useCallback } from "react";
import ClearCompletedButtonComponent from "Components/ClearCompletedButton/ClearCompletedButtonComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchClearCompletedTodoItem } from "actions/todoAction";

function ClearCompletedButtonContainer() {
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector((state) => state.authReducer);
    const onClickClearCompletedButton = useCallback(
        () => dispatch(fetchClearCompletedTodoItem()),
        [dispatch]
    );

    return (
        <ClearCompletedButtonComponent
            isLoggedIn={isLoggedIn}
            onClick={onClickClearCompletedButton}
        />
    );
}

export default ClearCompletedButtonContainer;
