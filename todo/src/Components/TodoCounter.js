import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ReactComponent as Success } from "assets/Icons/success.svg";
import { ReactComponent as Cross } from "assets/Icons/cross.svg";

const TodoCounterContainer = styled.div`
    display: flex;
    width: 60%;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    height: 40px;
    padding-right: 35px;

    @media (min-width: 320px) and (max-width: 480px) {
        width: 90%;
        padding-left: 20px;
    }
`;

const TodoCounterItem = styled.div`
    display: flex;
    flex-direction: row;
`;

const TodoCounterText = styled.div`
    font-size: 20px;
    margin: 5px 10px 5px 5px;

    animation-duration: 1s;
    animation-name: counter;

    @keyframes counter {
        from {
            font-size: 24px;
        }

        to {
            font-size: 20px;
        }
    }
`;

function TodoCounter({ completed, uncompleted }) {
    return (
        <TodoCounterContainer className="todo-counter-container">
            <TodoCounterItem>
                <Success style={{ width: 20, height: "auto" }} />
                <TodoCounterText>{completed}</TodoCounterText>
            </TodoCounterItem>
            <TodoCounterItem>
                <Cross style={{ width: 20, height: "auto" }} />
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
