import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'Constants/theme';
import useDarkMode from 'Hooks/useDarkMode';
import Header from 'Components/Header';
import SnackBar from 'Components/SnackBar';
import TodoList from 'Components/TodoList';
import TodoInput from 'Components/TodoInput';
import SocialMedia from 'Components/SocialMedia';
import GlobalStyles from 'Components/GlobalStyles';
import LoadingOverlay from 'Components/LoadingOverlay';
import ThemeChangeButton from 'Components/ThemeChangeButton';
import UserInfo from 'Components/UserInfo';
import LoginDialog from 'Components/LoginDialog';
import SignUpDialog from 'Components/SignUpDialog';

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
    font-family: 'Abel', sans-serif;
    text-shadow: 4px 4px 1px gray;
    user-select: none;

    @media (min-width: 320px) and (max-width: 480px) {
        margin-top: 24px;
        font-size: 36px;
        text-shadow: 3px 3px 1px gray;
    }
`;

function App() {
    const [theme, setTheme, componentMounted] = useDarkMode();

    if (!componentMounted) {
        return <div />;
    }

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <TodoContainer>
                <TodoTitleText>TO DO LIST</TodoTitleText>
                <SocialMedia />
                <UserInfo />
                <TodoInput />
                <Header />
                <TodoList />
                <ThemeChangeButton theme={theme} setTheme={setTheme} />
                <GlobalStyles />
            </TodoContainer>
            <LoadingOverlay />
            <SnackBar />
            <LoginDialog />
            <SignUpDialog />
        </ThemeProvider>
    );
}

App.propTypes = {
    state: PropTypes.objectOf(
        PropTypes.shape({
            todos: PropTypes.array.isRequired,
            completed: PropTypes.number.isRequired,
            uncompleted: PropTypes.number.isRequired,
            dispatch: PropTypes.func.isRequired,
        })
    ),
};

export default App;
