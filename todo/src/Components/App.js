import React, { useState } from "react";
import TodoInput from "Components/TodoInput";
import TodoList from "Components/TodoList";
import GlobalStyles from "Components/GlobalStyles";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return state;
};

function App(state) {
    const { todos, completed, uncompleted } = state;
    const [theme, setTheme] = useState(true);

    function onClickSetThemeButton() {
        setTheme(!theme);
    }

    return (
        <>
            <TodoInput />
            <TodoList todos={todos} key="TodoList" />
            <button onClick={() => onClickSetThemeButton()}>
                CHANGE THEME
            </button>
            <h2>Completed : {completed}</h2>
            <h2>uncompleted : {uncompleted}</h2>
            <GlobalStyles theme={theme} />
        </>
    );
}

App.propTypes = {
    state: PropTypes.objectOf(
        PropTypes.shape({
            todos: PropTypes.array.isRequired,
            completed: PropTypes.number.isRequired,
            uncompleted: PropTypes.number.isRequired,
            dispatch: PropTypes.func.isRequired
        })
    )
};

export default connect(mapStateToProps)(App);
