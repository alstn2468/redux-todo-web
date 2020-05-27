import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputContainer = styled.div`
    height: 100px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    @media (min-width: 320px) and (max-width: 480px) {
        height: 80px;
    }
`;

const Input = styled.input`
    height: 50%;
    width: 50%;
    font-size: 22px;

    @media (min-width: 320px) and (max-width: 480px) {
        width: 90%;
        height: 40%;
        font-size: 14px;
    }
`;

function TodoInputComponent({ text, onPressEnterKey, onChangeText }) {
    return (
        <InputContainer>
            <Input
                type="text"
                placeholder="Write some to do task and press enter."
                value={text}
                onChange={onChangeText}
                onKeyPress={onPressEnterKey}
                autoFocus
            />
        </InputContainer>
    );
}

TodoInputComponent.propTypes = {
    text: PropTypes.string,
    onPressEnterKey: PropTypes.func.isRequired,
    onChangeText: PropTypes.func.isRequired,
};

export default TodoInputComponent;
