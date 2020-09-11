import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTodoList } from "actions/todoAction";
import { todoDisplayFilter } from "actions/filterAction";
import TodoListComponent from "Components/TodoList/TodoListComponent";
import Cookies from "universal-cookie";

const cookies = new Cookies();

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
            throw new Error("Unknown Filter : " + filter);
    }
}

function mapStateToProps(state) {
    return {
        ...getDisplayTodos(state.todoReducer, state.todoDisplayFilterReducer),
        isLoggedIn: state.authReducer.isLoggedIn,
    };
}

function TodoListContainer({ isLoggedIn, todos, dispatch }) {
    useEffect(() => {
        function getAccessToken() {
            return cookies.get("Access-Token");
        }

        if (isLoggedIn || getAccessToken()) {
            dispatch(fetchTodoList());
        }
    }, [dispatch, isLoggedIn]);

    return <TodoListComponent todos={todos} isLoggedIn={isLoggedIn} />;
}

export default connect(mapStateToProps)(TodoListContainer);
