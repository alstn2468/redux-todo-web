import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import { lightTheme, darkTheme } from "Constants/theme";
import TodoInput from "Components/TodoInput";
import TodoList from "Components/TodoList";
import GlobalStyles from "Components/GlobalStyles";
import ThemeChangeButton from "Components/ThemeChangeButton";
import useDarkMode from "Components/useDarkMode";

const mapStateToProps = state => {
    return state;
};

function App(state) {
    const { todos, completed, uncompleted } = state;
    const [theme, setTheme, componentMounted] = useDarkMode();

    if (!componentMounted) {
        console.log("Didn't mounted yet");
        return <div />;
    }

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <>
                <TodoInput />
                <TodoList todos={todos} key="TodoList" />
                <ThemeChangeButton
                    theme={theme}
                    setTheme={setTheme}
                ></ThemeChangeButton>
                <h2>Completed : {completed}</h2>
                <h2>uncompleted : {uncompleted}</h2>
                <GlobalStyles />
            </>
        </ThemeProvider>
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
