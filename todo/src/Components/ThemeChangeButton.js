import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ReactComponent as MoonIcon } from "Icons/moon.svg";
import { ReactComponent as SunIcon } from "Icons/sun.svg";

const ButtonContainer = styled.button`
    position: fixed;
    top: 50px;
    right: 50px;
    background: ${({ theme }) => theme.gradient};
    border: 2px solid ${({ theme }) => theme.toggleBorder};
    border-radius: 30px;
    font-size: 0.5rem;
    margin: 0 auto;
    overflow: hidden;
    padding: 0.5rem;
    width: 8rem;
    height: 4rem;

    svg {
        height: auto;
        width: 2.5rem;
        transition: all 0.3s linear;

        &:first-child {
            transform: ${({ lightTheme }) =>
                lightTheme ? "translateY(0)" : "translateY(100px)"};
        }

        &:nth-child(2) {
            transform: ${({ lightTheme }) =>
                lightTheme ? "translateY(-100px)" : "translateY(0)"};
        }
    }
`;

function ThemeChangeButton({ theme, onClickChangeThemeButton }) {
    const isLight = theme === "light";

    return (
        <ButtonContainer
            onClick={onClickChangeThemeButton}
            lightTheme={isLight}
        >
            <SunIcon />
            <MoonIcon />
        </ButtonContainer>
    );
}

ThemeChangeButton.propTypes = {
    theme: PropTypes.string.isRequired,
    onClickChangeThemeButton: PropTypes.func.isRequired
};

export default ThemeChangeButton;
