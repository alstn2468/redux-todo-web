import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ReactComponent as MoonIcon } from "assets/Icons/moon.svg";
import { ReactComponent as SunIcon } from "assets/Icons/sun.svg";

const ButtonContainer = styled.button`
    position: fixed;
    top: 20px;
    right: 50px;
    background: ${({ theme }) => theme.gradient};
    border: 2px solid ${({ theme }) => theme.toggleBorder};
    border-radius: 30px;
    font-size: 0.5rem;
    margin: 0 auto;
    overflow: hidden;
    padding: 0.5rem;
    width: 4.5rem;
    height: 2.5rem;

    svg {
        height: auto;
        width: 1.2rem;
        transition: all 0.3s linear;

        &:first-child {
            transform: ${({ lightTheme }) =>
                lightTheme ? "translateX(10)" : "translateX(-100px)"};
        }

        &:nth-child(2) {
            transform: ${({ lightTheme }) =>
                lightTheme ? "translateX(100px)" : "translateX(-10)"};
        }
    }

    @media (min-width: 320px) and (max-width: 480px) {
        width: 3.5rem;
        height: 1.7rem;
        border-radius: 20px;
        padding: 0.2rem;
        top: 25px;
        right: 25px;

        svg {
            width: 1rem;
        }
    }
`;

function ThemeChangeButton({ theme, setTheme }) {
    const isLight = theme === "light";

    return (
        <ButtonContainer onClick={setTheme} lightTheme={isLight}>
            <SunIcon />
            <MoonIcon />
        </ButtonContainer>
    );
}

ThemeChangeButton.propTypes = {
    theme: PropTypes.string.isRequired,
    setTheme: PropTypes.func.isRequired
};

export default ThemeChangeButton;
