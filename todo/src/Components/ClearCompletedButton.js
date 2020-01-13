import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import actionCreators from "redux/action";

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

function ClearCompletedButton({ dispatch }) {
    function onClickClearCompletedButton() {
        dispatch(actionCreators.clearCompletedTodoItem());
    }
    return (
        <Button
            className="header-button"
            onClick={() => onClickClearCompletedButton()}
        >
            CLEAR COMPLETED
        </Button>
    );
}

ClearCompletedButton.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default connect()(ClearCompletedButton);
