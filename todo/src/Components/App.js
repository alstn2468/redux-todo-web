import React from "react";
import TodoInput from "Components/TodoInput";
import TodoList from "Components/TodoList";
import GlobalStyles from "Components/GlobalStyles";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return state;
};

function App(state) {
    const { todos } = state;
    console.log(state);

    return (
        <>
            <TodoInput />
            <TodoList todos={todos} key="TodoList" />
            <GlobalStyles />
        </>
    );
}

App.propTypes = {
    state: PropTypes.objectOf(
        PropTypes.shape({
            todos: PropTypes.array.isRequired,
            dispatch: PropTypes.func.isRequired
        })
    )
};

export default connect(mapStateToProps)(App);
