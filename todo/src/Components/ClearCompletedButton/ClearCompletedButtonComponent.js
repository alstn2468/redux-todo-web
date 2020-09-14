import React from "react";
import styled from "styled-components";

const Button = styled.button`
    display: flex;
    flex-direction: flex-start;
    font-size: 18px;
    margin-left: 10px;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 10px;
        margin-left: 5px;
        font-weight: 500;
    }
`;

function ClearCompletedButtonComponent({ isLoggedIn, onClick }) {
    return (
        <Button
            disabled={!isLoggedIn}
            className={`header-button${isLoggedIn ? " able" : ""}`}
            onClick={onClick}
        >
            CLEAR COMPLETED
        </Button>
    );
}

export default ClearCompletedButtonComponent;
