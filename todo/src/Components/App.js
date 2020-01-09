import React from "react";
import TodoInput from "Components/TodoInput";
import TodoList from "Components/TodoList";
import GlobalStyles from "Components/GlobalStyles";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return state;
};

function App(state) {
    const { todos } = state;

    return (
        <>
            <TodoInput />
            <TodoList todos={todos} key="TodoList" />
            <GlobalStyles />
        </>
    );
}

export default connect(mapStateToProps)(App);
