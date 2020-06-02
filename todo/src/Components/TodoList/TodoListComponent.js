import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Todo from 'Components/Todo';

const TodoListContainer = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    flex-direction: column;
    padding-top: 20px;
    margin-bottom: 30px;

    @media (min-width: 320px) and (max-width: 480px) {
        width: 90%;
        padding-top: 15px;
    }
`;

const EmptyList = styled.div`
    display: flex;
    height: 100px;
    align-items: center;
    margin-top: -20px;
    font-size: 26px;
    user-select: none;

    @media (min-width: 320px) and (max-width: 480px) {
        margin-top: -15px;
    }
`;

function TodoListComponent({ todos, isLoggedIn }) {
    return (
        <TodoListContainer className="todo-container">
            {isLoggedIn ? (
                todos.length > 0 ? (
                    todos.map((todo) => <Todo key={todo.id} item={todo} />)
                ) : (
                    <EmptyList>This list is empty.</EmptyList>
                )
            ) : (
                <EmptyList>Please login first.</EmptyList>
            )}
        </TodoListContainer>
    );
}

TodoListComponent.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            item: PropTypes.shape({
                id: PropTypes.number,
                text: PropTypes.string,
                isCompleted: PropTypes.bool,
            }),
        })
    ),
    isLoggedIn: PropTypes.bool.isRequired,
};

export default TodoListComponent;
