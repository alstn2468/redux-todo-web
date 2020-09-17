import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
    font-size: 20px;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 10px;
    }
`;

function AuthButton({ onClick, label }) {
    return (
        <Button className="auth-button" onClick={onClick}>
            {label}
        </Button>
    );
}

AuthButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
};

export default AuthButton;
