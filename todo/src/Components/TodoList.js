import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Todo from "Components/Todo";

function TodoList({ todos }) {
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
            item: PropTypes.objectOf(
                PropTypes.shape({
                    id: PropTypes.string,
                    text: PropTypes.string,
                    isCompleted: PropTypes.bool
                })
            )
        })
    )
};

export default connect()(TodoList);
