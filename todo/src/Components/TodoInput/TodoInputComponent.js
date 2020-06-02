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

function TodoInputComponent({
    isLoggedIn,
    text,
    onPressEnterKey,
    onChangeText,
    todoInputRef,
}) {
    return (
        <InputContainer>
            <Input
                ref={todoInputRef}
                disabled={!isLoggedIn}
                type="text"
                placeholder={
                    isLoggedIn
                        ? 'Write some to do task and press enter.'
                        : 'You can write it after login.'
                }
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
    isLoggedIn: PropTypes.bool.isRequired,
    todoInputRef: PropTypes.object.isRequired,
};

export default TodoInputComponent;
