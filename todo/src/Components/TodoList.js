import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Todo from "Components/Todo";

const TodoListContainer = styled.div`
    display: flex;
    width: 60%;
    align-items: center;
    flex-direction: column;
    padding-top: 20px;

    @media (min-width: 320px) and (max-width: 480px) {
        width: 90%;
        padding-top: 15px;
    }
`;

function TodoList({ todos }) {
    return (
        <TodoListContainer className="todo-container">
            {todos.length > 0 ? (
                todos.map(todo => <Todo key={todo.id} item={todo} />)
            ) : (
                <div>Empty Todo list</div>
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

export default connect()(TodoList);
