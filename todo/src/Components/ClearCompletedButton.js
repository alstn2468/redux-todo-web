import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import actionCreators from "redux/action";

const Button = styled.button`
    display: flex;
    flex-direction: flex-start;
    font-size: 20px;

    :hover {
        font-size: 22px;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 14px;
        margin-left: 10px;

        :hover {
            font-size: 16px;
        }
    }
`;

function ClearCompletedButton({ dispatch }) {
    function onClickClearCompletedButton() {
        dispatch(actionCreators.clearCompletedTodoItem());
    }
    return (
        <Button onClick={() => onClickClearCompletedButton()}>
            CLEAR COMPLETED
        </Button>
    );
}

export default connect()(ClearCompletedButton);
