import React, { useState } from "react";
import uuid from "uuid";
import PropTypes from "prop-types";
import styled from "styled-components";
import { connect } from "react-redux";
import actionCreators from "redux/action";

const InputContainer = styled.div`
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 320px) and (max-width: 480px) {
        height: 80px;
    }
`;

const Input = styled.input`
    height: 50%;
    width: 40%;
    font-size: 22px;
    border-radius: 10px;

    @media (min-width: 320px) and (max-width: 480px) {
        width: 60%;
        height: 40%;
        font-size: 16px;
    }
`;

const Button = styled.button`
    height: 50%;
    width: 15%;
    border-radius: 10px;
    margin: 10px;
    font-weight: 600;
    font-size: 22px;

    @media (min-width: 320px) and (max-width: 480px) {
        width: 20%;
        height: 40%;
        font-size: 14px;
    }
`;

function TodoInput({ dispatch }) {
    const [text, setText] = useState("");

    function onClickCreateButton() {
        if (text === "") {
            alert("메세지를 입력하세요");
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

    return (
        <InputContainer>
            <Input
                type="text"
                value={text}
                onChange={event => setText(event.target.value)}
            />
            <Button onClick={() => onClickCreateButton()}>CREATE</Button>
        </InputContainer>
    );
}

TodoInput.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default connect()(TodoInput);
