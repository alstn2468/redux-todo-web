import React, { useState } from "react";
import uuid from "uuid";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import actionCreators from "redux/action";

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

function TodoInput({ dispatch }) {
    const [text, setText] = useState("");

    function onPressEnterKey(event) {
        if (event.key === "Enter") {
            if (text === "") {
                alert("Please write any text.");
            } else {
                dispatch(
                    actionCreators.createTodoItem({
                        id: uuid(),
                        text,
                        isCompleted: false
                    })
                );
                setText("");
            }
        }
    }

    return (
        <InputContainer>
            <Input
                type="text"
                placeholder="Write some to do task and press enter."
                value={text}
                onChange={event => setText(event.target.value)}
                onKeyPress={event => onPressEnterKey(event)}
                autoFocus
            />
        </InputContainer>
    );
}

TodoInput.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default connect()(TodoInput);
