import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ReactComponent as CloseIcon } from "assets/Icons/close.svg";

const CloseButtonContainer = styled.div`
    position: absolute;
    top: 15px;
    right: 15px;

    @media (min-width: 320px) and (max-width: 480px) {
        top: 10px;
    }
`;

const CloseButton = styled.button`
    width: 14px;
    height: 14px;

    @media (min-width: 320px) and (max-width: 480px) {
        width: 11px;
        height: 11px;
    }
`;

function DialogCloseButton({ onClick }) {
    return (
        <CloseButtonContainer>
            <CloseButton className="header-button">
                <CloseIcon onClick={onClick} />
            </CloseButton>
        </CloseButtonContainer>
    );
}

DialogCloseButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default DialogCloseButton;
