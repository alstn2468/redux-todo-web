import React, { useState } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import { lightTheme, darkTheme } from "Constants/theme";
import TodoInput from "Components/TodoInput";
import TodoList from "Components/TodoList";
import GlobalStyles from "Components/GlobalStyles";
import ThemeChangeButton from "Components/ThemeChangeButton";

const mapStateToProps = state => {
    return state;
};

function App(state) {
    const { todos, completed, uncompleted } = state;
    const [theme, setTheme] = useState("light");

    function onClickChangeThemeButton() {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <>
                <TodoInput />
                <TodoList todos={todos} key="TodoList" />
                <ThemeChangeButton
                    theme={theme}
                    onClickChangeThemeButton={onClickChangeThemeButton}
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
