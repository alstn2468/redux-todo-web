import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ClearCompletedButton from "Components/ClearCompletedButton";
import TodoFilterButton from "Components/TodoFilterButton";
import TodoCounter from "Components/TodoCounter";

const HeaderContainer = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    height: 40px;
    padding: 0 35px;

    @media (min-width: 320px) and (max-width: 480px) {
        width: 90%;
        padding: 0 10px;
    }
`;

function Header({ completed, uncompleted }) {
    return (
        <HeaderContainer className="todo-counter-container">
            <ClearCompletedButton />
            <TodoFilterButton />
            <TodoCounter completed={completed} uncompleted={uncompleted} />
        </HeaderContainer>
    );
}

Header.propTypes = {
    completed: PropTypes.number.isRequired,
    uncompleted: PropTypes.number.isRequired
};

export default Header;
