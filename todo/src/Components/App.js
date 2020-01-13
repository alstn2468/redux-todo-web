import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import { lightTheme, darkTheme } from "Constants/theme";
import TodoInput from "Components/TodoInput";
import TodoList from "Components/TodoList";
import Header from "Components/Header";
import GlobalStyles from "Components/GlobalStyles";
import ThemeChangeButton from "Components/ThemeChangeButton";
import useDarkMode from "Components/useDarkMode";
import SocialMedia from "./SocialMedia";

const TodoContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const TodoTitleText = styled.div`
    text-align: center;
    margin-top: 30px;
    margin-bottom: 5px;
    font-size: 52px;
    font-weight: bold;
    font-family: "Abel", sans-serif;
    text-shadow: 4px 4px 1px gray;

    @media (min-width: 320px) and (max-width: 480px) {
        margin-top: 24px;
        font-size: 36px;
        text-shadow: 3px 3px 1px gray;
    }
`;

const mapStateToProps = state => {
    return state;
};

function App(state) {
    const [theme, setTheme, componentMounted] = useDarkMode();
    const { completed, uncompleted } = state.todoReducer;

    if (!componentMounted) {
        return <div />;
    }

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <TodoContainer>
                <TodoTitleText>TO DO LIST</TodoTitleText>
                <SocialMedia />
                <TodoInput />
                <Header completed={completed} uncompleted={uncompleted} />
                <TodoList />
                <ThemeChangeButton theme={theme} setTheme={setTheme} />
                <GlobalStyles />
            </TodoContainer>
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
