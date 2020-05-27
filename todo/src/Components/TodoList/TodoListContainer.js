import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import actionCreators from 'redux/action';
import { todoDisplayFilter } from 'redux/action';
import TodoListComponent from './TodoListComponent';

function getDisplayTodos(state, filter) {
    switch (filter) {
        case todoDisplayFilter.DISPLAY_ALL_TODO:
            return { ...state };

        case todoDisplayFilter.DISPLAY_COMPLETD_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.isCompleted),
            };

        case todoDisplayFilter.DISPLAY_UNCOMPLETD_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => !todo.isCompleted),
            };

        default:
            throw new Error('Unknown Filter : ' + filter);
    }
}

function mapStateToProps(state) {
    return getDisplayTodos(state.todoReducer, state.todoDisplayFilterReducer);
}

function TodoListContainer({ todos, dispatch }) {
    useEffect(() => {
        function fetchTodoList() {
            dispatch(actionCreators.fetchTodoList());
        }

        fetchTodoList();
    }, [dispatch]);

    return <TodoListComponent todos={todos} />;
}

export default connect(mapStateToProps)(TodoListContainer);
