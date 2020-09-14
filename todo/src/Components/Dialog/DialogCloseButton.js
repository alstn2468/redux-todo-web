import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ReactComponent as CloseIcon } from "assets/Icons/close.svg";

const CloseButtonContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
`;
const CloseButton = styled.button`
    width: 14px;
    height: 14px;
    margin-right: 10px;
    margin-bottom: 15px;

    @media (min-width: 320px) and (max-width: 480px) {
        width: 11px;
        height: 11px;
        margin-bottom: 5px;
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
