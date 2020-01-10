import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ReactComponent as Success } from "assets/Icons/success.svg";
import { ReactComponent as Cross } from "assets/Icons/cross.svg";

const TodoCounterContainer = styled.div`
    display: flex;
    flex-direction: row;
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

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 16px;
    }
`;

function Header({ completed, uncompleted }) {
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

Header.propTypes = {
    completed: PropTypes.number.isRequired,
    uncompleted: PropTypes.number.isRequired
};

export default Header;
