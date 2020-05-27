import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

function ClearCompletedButtonComponent({ onClickClearCompletedButton }) {
    return (
        <Button className="header-button" onClick={onClickClearCompletedButton}>
            CLEAR COMPLETED
        </Button>
    );
}

ClearCompletedButtonComponent.propTypes = {
    onClickClearCompletedButton: PropTypes.func.isRequired,
};

export default ClearCompletedButtonComponent;
