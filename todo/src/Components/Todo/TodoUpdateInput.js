import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Input = styled.input`
    width: 80%;
    border: none;
    font-size: 22px;
    font-weight: 400;
    text-align: left;
    margin: 0 10px;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 15px;
    }
`;

function TodoUpdateInput({
    todoInputRef,
    isLoggedIn,
    onChange,
    onKeyPress,
    value,
}) {
    return (
        <Input
            ref={todoInputRef}
            className="todo-input"
            disabled={!isLoggedIn}
            onChange={onChange}
            onKeyPress={onKeyPress}
            value={value}
        />
    );
}

TodoUpdateInput.propTypes = {
    value: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    todoInputRef: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onKeyPress: PropTypes.func.isRequired,
};

export default TodoUpdateInput;
