import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
    font-size: 18px;

    :last-child {
        :after {
            border: none;
        }
    }

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 12px;
        font-weight: 500;

        :hover {
            font-size: 12px;
        }
    }
`;

function FilterButton({ isSelected, isLoggedIn, onClick, children }) {
    return (
        <Button
            className={`header-button ${
                isSelected && isLoggedIn ? "selected" : "unselected"
            } ${isLoggedIn ? "able" : "disable"}`}
            disabled={isSelected || !isLoggedIn}
            onClick={onClick}
        >
            {children}
        </Button>
    );
}

FilterButton.propTypes = {
    isSelected: PropTypes.bool.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired,
};

export default FilterButton;
