import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DialogButtonContainer = styled.div`
    width: 60%;
    margin-top: 10px;
`;

const DialogSubmitButton = styled.button`
    width: 100%;
    height: 40px;
    font-size: 16px;

    @media (min-width: 320px) and (max-width: 480px) {
        height: 34px;
        font-size: 12px;
    }
`;

function DialogButton({ onClick, disabled, label }) {
    return (
        <DialogButtonContainer>
            <DialogSubmitButton
                className="dialog-button"
                onClick={onClick}
                disabled={disabled}
            >
                {label}
            </DialogSubmitButton>
        </DialogButtonContainer>
    );
}

DialogButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
};

export default DialogButton;
