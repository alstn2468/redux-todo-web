import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ReactComponent as Success } from "assets/Icons/success.svg";
import { ReactComponent as Cross } from "assets/Icons/cross.svg";

const TodoCounterContainer = styled.div`
    display: flex;
    flex-direction: row;

    @media (min-width: 320px) and (max-width: 480px) {
        display: flex;
        flex-wrap: nowrap;
        margin-left: -70px;
        margin-top: -65px;
    }
`;

const TodoCounterItem = styled.div`
    display: flex;
    flex-direction: row;
`;

const TodoCounterText = styled.div`
    font-size: 20px;
    margin: 5px 10px 5px 5px;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 16px;
        margin: 5px 7px 5px 2px;
    }
`;

function TodoCounter({ completed, uncompleted }) {
    return (
        <TodoCounterContainer>
            <TodoCounterItem>
                <Success className="counter-icon" />
                <TodoCounterText>{completed}</TodoCounterText>
            </TodoCounterItem>
            <TodoCounterItem>
                <Cross className="counter-icon" />
                <TodoCounterText>{uncompleted}</TodoCounterText>
            </TodoCounterItem>
        </TodoCounterContainer>
    );
}

TodoCounter.propTypes = {
    completed: PropTypes.number.isRequired,
    uncompleted: PropTypes.number.isRequired
};

export default TodoCounter;
