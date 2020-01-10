import React from "react";
import styled from "styled-components";
import ProptTypes from "prop-types";

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;

    :first-child {
        margin-right: 0;
    }

    :last-child {
        margin-right: 0;
    }

    svg {
        height: auto;
        width: 1.4rem;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        svg {
            width: 1rem;
        }
    }
`;

function TodoButton({ onClick, buttonIcon, flag, styles }) {
    return (
        <Button onClick={onClick} disabled={flag} style={styles}>
            {buttonIcon}
        </Button>
    );
}

TodoButton.propTypes = {
    onClick: ProptTypes.func.isRequired,
    buttonName: ProptTypes.string.isRequired,
    flag: ProptTypes.bool.isRequired
};

export default TodoButton;
