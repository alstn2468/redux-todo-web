import React, { useCallback } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchClearCompletedTodoItem } from "actions/todoAction";

const Button = styled.button`
    display: flex;
    flex-direction: flex-start;
    font-size: 18px;
    margin-left: 10px;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 10px;
        margin-left: 5px;
        font-weight: 500;
    }
`;

function ClearCompletedButton() {
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector((state) => state.authReducer);
    const onClickClearCompletedButton = useCallback(
        () => dispatch(fetchClearCompletedTodoItem()),
        [dispatch]
    );

    return (
        <Button
            disabled={!isLoggedIn}
            className={`header-button${isLoggedIn ? " able" : ""}`}
            onClick={onClickClearCompletedButton}
        >
            CLEAR COMPLETED
        </Button>
    );
}

export default ClearCompletedButton;
