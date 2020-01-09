import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Todo from "Components/Todo";

function TodoList({ todos }) {
    console.log(todos);
    return (
        <div>
            {todos.length > 0 ? (
                todos.map(todo => <Todo key={todo.item.id} item={todo.item} />)
            ) : (
                <div>Empty Todo list</div>
            )}
        </div>
    );
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            isCompleted: PropTypes.bool.isRequired
        }).isRequired
    ).isRequired
};

export default connect()(TodoList);
