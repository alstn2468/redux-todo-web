import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";
import Todo from "Components/Todo";
import { todoDisplayFilter } from "redux/action";

const TodoListContainer = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    flex-direction: column;
    padding-top: 20px;

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

    @media (min-width: 320px) and (max-width: 480px) {
        margin-top: -15px;
    }
`;

function getDisplayTodos(state, filter) {
    switch (filter) {
        case todoDisplayFilter.DISPLAY_ALL_TODO:
            return { ...state };

        case todoDisplayFilter.DISPLAY_COMPLETD_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.isCompleted)
            };

        case todoDisplayFilter.DISPLAY_UNCOMPLETD_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.isCompleted)
            };

        default:
            throw new Error("Unknown Filter : " + filter);
    }
}

function mapStateToProps(state) {
    return getDisplayTodos(state.todoReducer, state.todoDisplayFilterReducer);
}

function TodoList({ todos }) {
    return (
        <TodoListContainer className="todo-container">
            {todos.length > 0 ? (
                todos.map(todo => <Todo key={todo.id} item={todo} />)
            ) : (
                <EmptyList>This list is empty.</EmptyList>
            )}
        </TodoListContainer>
    );
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            item: PropTypes.shape({
                id: PropTypes.string,
                text: PropTypes.string,
                isCompleted: PropTypes.bool
            })
        })
    )
};

export default connect(mapStateToProps)(TodoList);
